import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface QuoteRequest {
    bedrooms: bigint;
    name: string;
    email: string;
    suburb: string;
    timestamp: Time;
    phone: string;
    bathrooms: bigint;
    extras: Array<string>;
    carpetCleaning: boolean;
}
export interface ContactSubmission {
    serviceType: string;
    name: string;
    email: string;
    suburb: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    submitContactForm(name: string, email: string, phone: string, suburb: string, serviceType: string, message: string): Promise<void>;
    submitQuoteRequest(name: string, email: string, phone: string, suburb: string, bedrooms: bigint, bathrooms: bigint, carpetCleaning: boolean, extras: Array<string>): Promise<void>;
}
