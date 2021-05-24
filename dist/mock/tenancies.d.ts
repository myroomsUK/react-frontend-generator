export const tenancies: {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": ({
        "@id": string;
        "@type": string;
        id: number;
        code: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            type: string;
            propertyName: string;
            address: string;
            floorplans: never[];
            country: string;
            city: string;
            county: string;
            area: string;
            neighborhood: string;
            postcode: string;
            images: never[];
            units: {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    unavailable_to_let: number;
                };
                eligibleTransitions: string[];
            }[];
            askedMonthlyPrice: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        landlord: {
            "@id": string;
            "@type": string;
            id: number;
            personalData: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
                surname: string;
                address1: string;
                postcode: string;
                postcode2: string;
                email: string;
                mobile: string;
            };
        };
        firstLandlordTenancy: {
            "@id": string;
            "@type": string;
            landlordContract: {
                "@id": string;
                "@type": string;
                months: number;
                fee: number;
                payments: never[];
                endDate: string;
                currentPlace: string;
                id: number;
                startDate: string;
                eligibleTransitions: string[];
            };
            id: number;
            rent: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        renewals: never[];
        activeTenancy: {
            "@id": string;
            "@type": string;
            landlordContract: {
                "@id": string;
                "@type": string;
                months: number;
                fee: number;
                payments: never[];
                endDate: string;
                currentPlace: string;
                id: number;
                startDate: string;
                eligibleTransitions: string[];
            };
            id: number;
            rent: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        currentPlace: {
            active: boolean;
            expired?: undefined;
        };
        eligibleTransitions: never[];
    } | {
        "@id": string;
        "@type": string;
        id: number;
        code: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            type: string;
            propertyName: string;
            address: string;
            floorplans: never[];
            country: string;
            city: string;
            county: string;
            area: string;
            neighborhood: string;
            postcode: string;
            images: never[];
            units: {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                weeklyPrice: number;
                images: never[];
                currentPlace: {
                    not_managed: number;
                };
                eligibleTransitions: string[];
            }[];
            askedMonthlyPrice: number;
            currentPlace: string;
            eligibleTransitions: never[];
        };
        landlord: {
            "@id": string;
            "@type": string;
            id: number;
            personalData: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
                surname: string;
                address1: string;
                email: string;
                mobile: string;
                postcode?: undefined;
                postcode2?: undefined;
            };
        };
        renewals: never[];
        currentPlace: {
            expired: boolean;
            active?: undefined;
        };
        eligibleTransitions: never[];
        firstLandlordTenancy?: undefined;
        activeTenancy?: undefined;
    } | {
        "@id": string;
        "@type": string;
        id: number;
        code: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            type: string;
            propertyName: string;
            address: string;
            floorplans: never[];
            country: string;
            city: string;
            county: string;
            area: string;
            neighborhood: string;
            postcode: string;
            images: never[];
            units: ({
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                weeklyPrice: number;
                images: never[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    unavailable_to_let: number;
                };
                eligibleTransitions: string[];
                type?: undefined;
            } | {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    unavailable_to_let: number;
                };
                eligibleTransitions: string[];
            })[];
            askedMonthlyPrice: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        landlord: {
            "@id": string;
            "@type": string;
            id: number;
            personalData: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
                surname: string;
                address1: string;
                email: string;
                mobile: string;
                postcode?: undefined;
                postcode2?: undefined;
            };
        };
        firstLandlordTenancy: {
            "@id": string;
            "@type": string;
            landlordContract: {
                "@id": string;
                "@type": string;
                months: number;
                fee: number;
                payments: never[];
                endDate: string;
                currentPlace: string;
                id: number;
                startDate: string;
                eligibleTransitions: string[];
            };
            id: number;
            rent: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        renewals: never[];
        activeTenancy: {
            "@id": string;
            "@type": string;
            landlordContract: {
                "@id": string;
                "@type": string;
                months: number;
                fee: number;
                payments: never[];
                endDate: string;
                currentPlace: string;
                id: number;
                startDate: string;
                eligibleTransitions: string[];
            };
            id: number;
            rent: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        currentPlace: {
            active: boolean;
            expired?: undefined;
        };
        eligibleTransitions: never[];
    } | {
        "@id": string;
        "@type": string;
        id: number;
        code: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            type: string;
            propertyName: string;
            address: string;
            floorplans: never[];
            country: string;
            city: string;
            county: string;
            area: string;
            neighborhood: string;
            postcode: string;
            images: never[];
            units: {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    unavailable_to_let: number;
                };
                eligibleTransitions: string[];
            }[];
            askedMonthlyPrice: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        landlord: {
            "@id": string;
            "@type": string;
            id: number;
            personalData: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
                surname: string;
                address1: string;
                email: string;
                mobile: string;
                postcode?: undefined;
                postcode2?: undefined;
            };
        };
        renewals: never[];
        currentPlace: {
            active: boolean;
            expired?: undefined;
        };
        eligibleTransitions: never[];
        firstLandlordTenancy?: undefined;
        activeTenancy?: undefined;
    } | {
        "@id": string;
        "@type": string;
        id: number;
        code: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            type: string;
            propertyName: string;
            address: string;
            floorplans: never[];
            country: string;
            city: string;
            county: string;
            area: string;
            neighborhood: string;
            postcode: string;
            images: never[];
            units: ({
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    unavailable_to_let: number;
                    vacant?: undefined;
                    available_to_let?: undefined;
                };
                eligibleTransitions: string[];
            } | {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    vacant: number;
                    available_to_let: number;
                    occupied?: undefined;
                    unavailable_to_let?: undefined;
                };
                eligibleTransitions: string[];
            } | {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    available_to_let: number;
                    unavailable_to_let?: undefined;
                    vacant?: undefined;
                };
                eligibleTransitions: string[];
            })[];
            askedMonthlyPrice: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        landlord: {
            "@id": string;
            "@type": string;
            id: number;
            personalData: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
                surname: string;
                address1: string;
                email: string;
                mobile: string;
                postcode?: undefined;
                postcode2?: undefined;
            };
        };
        firstLandlordTenancy: {
            "@id": string;
            "@type": string;
            landlordContract: {
                "@id": string;
                "@type": string;
                months: number;
                fee: number;
                payments: never[];
                endDate: string;
                currentPlace: string;
                id: number;
                startDate: string;
                eligibleTransitions: string[];
            };
            id: number;
            rent: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        renewals: never[];
        activeTenancy: {
            "@id": string;
            "@type": string;
            landlordContract: {
                "@id": string;
                "@type": string;
                months: number;
                fee: number;
                payments: never[];
                endDate: string;
                currentPlace: string;
                id: number;
                startDate: string;
                eligibleTransitions: string[];
            };
            id: number;
            rent: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        currentPlace: {
            active: boolean;
            expired?: undefined;
        };
        eligibleTransitions: never[];
    } | {
        "@id": string;
        "@type": string;
        id: number;
        code: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            type: string;
            propertyName: string;
            address: string;
            floorplans: never[];
            country: string;
            city: string;
            county: string;
            area: string;
            neighborhood: string;
            postcode: string;
            images: never[];
            units: ({
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    vacant: number;
                    available_to_let: number;
                    occupied?: undefined;
                };
                eligibleTransitions: string[];
            } | {
                "@id": string;
                "@type": string;
                id: number;
                unitLetter: string;
                type: string;
                weeklyPrice: number;
                images: {
                    "@id": string;
                    "@type": string;
                    id: number;
                    filename: string;
                    ext: string;
                    subDir: string;
                    path: string;
                    url: string;
                    weight: number;
                    width: number;
                    height: number;
                    md5: string;
                    title: string;
                    mimeType: string;
                }[];
                currentPlace: {
                    managed: number;
                    occupied: number;
                    available_to_let: number;
                    vacant?: undefined;
                };
                eligibleTransitions: string[];
            })[];
            askedMonthlyPrice: number;
            currentPlace: string;
            eligibleTransitions: string[];
        };
        landlord: {
            "@id": string;
            "@type": string;
            id: number;
            personalData: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
                surname: string;
                address1: string;
                email: string;
                mobile: string;
                postcode?: undefined;
                postcode2?: undefined;
            };
        };
        renewals: never[];
        currentPlace: {
            active: boolean;
            expired?: undefined;
        };
        eligibleTransitions: never[];
        firstLandlordTenancy?: undefined;
        activeTenancy?: undefined;
    })[];
    "hydra:totalItems": number;
    "hydra:view": {
        "@id": string;
        "@type": string;
        "hydra:first": string;
        "hydra:last": string;
        "hydra:next": string;
    };
    "hydra:search": {
        "@type": string;
        "hydra:template": string;
        "hydra:variableRepresentation": string;
        "hydra:mapping": {
            "@type": string;
            variable: string;
            property: string;
            required: boolean;
        }[];
    };
};
