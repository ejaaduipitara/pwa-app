import { Injectable } from "@angular/core";
import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "./http.client";
import { ApiHttpRequestType, ApiRequest } from "./model/api.request";
import { ApiResponse } from "./model/api.response";

// Define ContentMetaData interface outside the service class
interface ContentMetaData {
    identifier: string;
    name: string;
    thumbnail: string;
    description: string;
    mimetype: string;
    url: string;
    domain: string;
    curriculargoal: null;
    competencies: null;
    language: string;
    category: string;
    audience: Array<any>;
    focus: string;
    keyword: any;
    status: string;
    createdon: string;
    lastupdatedon: string;
    media?: Array<any>;
    isLiked?: boolean;
}

interface SearchContentMetaData {
    agegroup: string;
    audience: string;
    bpp_id: string;
    bpp_uri: string;
    category: string;
    competency: Array<any>;
    createdon: string;
    curriculargoal: string;
    description: string;
    domain: string;
    identifier: string;
    id: string;
    keywords: string;
    language: string;
    lastupdatedon: string;
    learningOutcomes: string;
    mimetype: string;
    midea: string;
    provider_id: string;
    provider_name: null;
    name: string;
    sourceOrganisation: string;
    unique_id: string;
    thumbnail: string;
    status: string;
    url: string;
    content_type: string;
}

@Injectable({
    providedIn: 'root'
})
export class HttpCapacitorAdapter implements HttpClient {
    // Move mappedContent inside the methods where it's used
    private http = CapacitorHttp;

    constructor() {}

    get(baseUrl: string, path: string, headers: any, parameters: { [key: string]: string }): Observable<ApiResponse> {
        return this.invokeRequest(ApiHttpRequestType.GET, baseUrl + path, parameters, headers);
    }

    patch(baseUrl: string, path: string, headers: any, body: {}): Observable<ApiResponse> {
        return this.invokeRequest(ApiHttpRequestType.PATCH, baseUrl + path, body, headers);
    }

    post(baseUrl: string, path: string, headers: any, body: {}): Observable<ApiResponse> {
        return this.invokeRequest(ApiHttpRequestType.POST, baseUrl + path, body, headers);
    }

    checkMimieType(url: any)
    {
       
        const mediaUrl = url;
        // console.log(mediaUrl);
        // console.log(mediaUrl.endsWith(".mp3"));


        if (mediaUrl.endsWith(".mp3")) {
            return 'audio/mp3' ; // // MP3 audio
        } else if (mediaUrl.endsWith(".pdf")) {
            return 'application/pdf';             // PDF document
        } else if (mediaUrl.includes("youtube.com") || mediaUrl.includes("youtu.be")) {
            return 'video/x-youtube'; //            // YouTube video
        } else if (mediaUrl.endsWith(".mp4")) {
            return 'video/mp4';            // MP4 video
        } else {
            return 'text/html';
        }
    }

    private invokeRequest(type: ApiHttpRequestType, url: string, parametersOrData: any,
                          headers: { [key: string]: string }): Observable<ApiResponse> {
        const observable = new Subject<ApiResponse>();

        const requestOptions: any = {
            url: url,
            method: type.toLowerCase(),
            headers: headers,
        };

        if (
          type === ApiHttpRequestType.POST ||
          type === ApiHttpRequestType.PATCH
        ) {
            requestOptions['data'] = parametersOrData;
        } else if (
          type === ApiHttpRequestType.GET ||
          type === ApiHttpRequestType.DELETE
        ) {
            requestOptions['params']  = parametersOrData;
        }
        
        this.http.request(requestOptions).then((response: HttpResponse) => {
            response.data = response.data;
             let receivedData = response.data;

            // Move mappedContent inside the response handling block
            const mappedContent: SearchContentMetaData[] = [];

            if (receivedData.data && receivedData.data.djp_contents !== null && receivedData.data.djp_contents !== undefined) {
                receivedData.data.djp_contents.forEach((item : any) => {
                    // let mimetype = item?.url ?  this.checkMimieType(item?.url) : 'text/html';
                    let mimetype = this.checkMimieType(item?.url);
                // Traverse through the items array of each provider
                const content: SearchContentMetaData = {
                    agegroup: item.agegroup,
                    audience: item.audience,
                    bpp_id: item.bpp_id,
                    bpp_uri: item.bpp_uri,
                    competency: item.competencies,
                    category: item.category,
                    createdon: item.createdon,
                    curriculargoal: item.curriculargoal,
                    id: item.item_id,
                    identifier: item.identifier,
                    provider_id: item.provider_id,
                    provider_name: item.provider_name,
                    name: item.name,
                    description: item.description,
                    thumbnail: item.thumbnail,
                    domain: item.domain,
                    unique_id: item.unique_id,
                    language: item.language,
                    url: item.url,
                    sourceOrganisation: item.sourceorg,
                    midea: item.midea,
                    keywords: item.keywords,
                    lastupdatedon: item.lastupdatedon,
                    learningOutcomes: item.learningOutcomes,
                    status: item.status,
                    content_type: item.content_type,
                    mimetype: mimetype, //"application/pdf" : "video/x-youtube", // You can populate this based on item properties
                    // mimetype: 'video/x-youtube'
                };
                // Push the mapped object into the array
                mappedContent.push(content);
            });
            }

            // response.data.forEach((provider : any) => {
            //     // Traverse through the items array of each provider
            //     provider.items.forEach((item: any) => {
            //         console.log("1");
            //         // Map item properties to ContentMetaData interface format
            //         const content: SearchContentMetaData = {
            //             bpp_id: item.bpp_id,
            //             bpp_uri: item.bpp_uri,
            //             provider_id: item.provider_id,
            //             provider_name: item.provider_name,
            //             unique_id: item.unique_id,
            //             id: item.id,
            //             item_id: item.item_id,
            //             title: item.title,
            //             image_url: item?.image_url.length ? (item?.descriptor?.images[0].url.split("/"))[0] : '', // You can populate this based on item properties
            //             description: item.description.long_desc || item.description.short_desc || ''
            //         };
            //         // Push the mapped object into the array
            //         mappedContent.push(content);
            //         console.log(mappedContent);
            //     });
            // });
            
            if(mappedContent){
                let apiResponse: ApiResponse;
                if (receivedData.data && receivedData.data.djp_contents !== null && receivedData.data.djp_contents !== undefined) {
                    apiResponse = {
                        body: {
                            "result" : mappedContent,
                            'audioText': response?.data?.audioText},// response.data,
                        responseCode : 200,//response.status,
                        errorMesg : '',
                        headers : response.headers,
                        requestHeaders: requestOptions.headers
                    }
                } else {
                    apiResponse = {
                        body: {
                            "result" : response.data},// response.data,
                        responseCode : 200,//response.status,
                        errorMesg : '',
                        headers : response.headers,
                        requestHeaders: requestOptions.headers
                    }
                }
            observable.next(apiResponse);
            observable.complete();
        }
        }).catch((response) => {
            console.error('error', response);
            const apiResponse: ApiResponse = {
                body: {},
                responseCode : response.status,
                errorMesg : 'SERVER_ERROR',
                headers : response.headers,
                requestHeaders: requestOptions.headers
            }
            try {
                try {
                    response.body = JSON.parse(response.error!);
                } catch (e) {
                    apiResponse.body = response.error;
                    if (response.status <= 0) {
                      throw e;
                    }
                }
                if (response.responseCode >= 400 && response.responseCode <= 499) {
                    observable.error(new Error());
                } else {
                    observable.error(new Error());
                }
            } catch (e) {
                observable.error(new Error());
                observable.complete();
            }
        })

        return observable;
    }
}
