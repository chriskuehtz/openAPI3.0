// tslint:disable
/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.6
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Address
 */
export interface Address  {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    zip?: string;
}

export function AddressFromJSON(json: any): Address {
    return {
        'street': !exists(json, 'street') ? undefined : json['street'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
    };
}

export function AddressToJSON(value?: Address): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'street': value.street,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
    };
}


