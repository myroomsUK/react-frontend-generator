export const properties: {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": ({
        "@id": string;
        "@type": string;
        id: number;
        service: string;
        hmo: boolean;
        type: {
            "@id": string;
            "@type": string;
            id: number;
            description: string;
        };
        propertyName: string;
        address: string;
        rentableUnits: number;
        maximumOccupancy: number;
        bathrooms: number;
        floors: number;
        bedrooms: number;
        hasPartition: boolean;
        floorplans: never[];
        separateToilet: number;
        parking: boolean;
        concierge: boolean;
        lift: boolean;
        floorNumber: number;
        gym: boolean;
        spa: boolean;
        sharedBPG: string;
        woodenFloors: boolean;
        carpet: boolean;
        smokeAlarm: boolean;
        CODetector: boolean;
        storageRoom: boolean;
        livingRoom: never[];
        kitchen: never[];
        country: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        city: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        county: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        area: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        neighborhood: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        postcode: {
            "@id": string;
            "@type": string;
            id: number;
            postcode: string;
        };
        utilities: never[];
        backGarden: boolean;
        communalGarden: boolean;
        frontGarden: boolean;
        privateGarden: boolean;
        terrace: boolean;
        patio: boolean;
        sharedBathroom: never[];
        images: never[];
        units: ({
            "@id": string;
            "@type": string;
            id: number;
            unitLetter: string;
            weeklyPrice: number;
            floorNumber: number;
            images: never[];
            currentPlace: string;
            eligibleTransitions: string[];
            availableFrom?: undefined;
        } | {
            "@id": string;
            "@type": string;
            id: number;
            unitLetter: string;
            weeklyPrice: number;
            availableFrom: string;
            floorNumber: number;
            images: never[];
            currentPlace: string;
            eligibleTransitions: string[];
        })[];
        askedMonthlyPrice: number;
        landlordRelationships: {
            "@id": string;
            "@type": string;
            currentPlace: {
                expired: boolean;
            };
            eligibleTransitions: never[];
        }[];
        arthurProperty: {
            "@type": string;
            "@id": string;
            id: number;
        };
        currentPlace: string;
        hasTopUp: boolean;
        eligibleTransitions: never[];
        createdAt: string;
        updatedAt: string;
    } | {
        "@id": string;
        "@type": string;
        id: number;
        service: string;
        hmo: boolean;
        type: {
            "@id": string;
            "@type": string;
            id: number;
            description: string;
        };
        propertyName: string;
        address: string;
        rentableUnits: number;
        maximumOccupancy: number;
        bathrooms: number;
        floors: number;
        bedrooms: number;
        hasPartition: boolean;
        floorplans: never[];
        separateToilet: number;
        parking: boolean;
        concierge: boolean;
        lift: boolean;
        floorNumber: number;
        gym: boolean;
        spa: boolean;
        sharedBPG: string;
        woodenFloors: boolean;
        carpet: boolean;
        smokeAlarm: boolean;
        CODetector: boolean;
        storageRoom: boolean;
        livingRoom: never[];
        kitchen: never[];
        country: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        city: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        county: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        area: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        neighborhood: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        postcode: {
            "@id": string;
            "@type": string;
            id: number;
            postcode: string;
        };
        utilities: never[];
        backGarden: boolean;
        communalGarden: boolean;
        frontGarden: boolean;
        privateGarden: boolean;
        terrace: boolean;
        patio: boolean;
        sharedBathroom: never[];
        images: never[];
        units: ({
            "@id": string;
            "@type": string;
            id: number;
            unitLetter: string;
            weeklyPrice: number;
            availableFrom: string;
            floorNumber: number;
            images: never[];
            currentPlace: string;
            eligibleTransitions: never[];
            type?: undefined;
        } | {
            "@id": string;
            "@type": string;
            id: number;
            unitLetter: string;
            type: {
                "@id": string;
                "@type": string;
                description: string;
            };
            weeklyPrice: number;
            availableFrom: string;
            floorNumber: number;
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
            currentPlace: string;
            eligibleTransitions: never[];
        })[];
        askedMonthlyPrice: number;
        landlordRelationships: {
            "@id": string;
            "@type": string;
            currentPlace: {
                active: boolean;
            };
            eligibleTransitions: never[];
        }[];
        arthurProperty: {
            "@type": string;
            "@id": string;
            id: number;
        };
        currentPlace: string;
        hasTopUp: boolean;
        eligibleTransitions: string[];
        createdAt: string;
        updatedAt: string;
    } | {
        "@id": string;
        "@type": string;
        id: number;
        service: string;
        hmo: boolean;
        type: {
            "@id": string;
            "@type": string;
            id: number;
            description: string;
        };
        propertyName: string;
        address: string;
        rentableUnits: number;
        maximumOccupancy: number;
        bathrooms: number;
        floors: number;
        bedrooms: number;
        hasPartition: boolean;
        floorplans: never[];
        separateToilet: number;
        parking: boolean;
        concierge: boolean;
        lift: boolean;
        floorNumber: number;
        gym: boolean;
        spa: boolean;
        sharedBPG: string;
        woodenFloors: boolean;
        carpet: boolean;
        smokeAlarm: boolean;
        CODetector: boolean;
        storageRoom: boolean;
        livingRoom: never[];
        kitchen: never[];
        country: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        city: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        county: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        area: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        neighborhood: {
            "@id": string;
            "@type": string;
            id: number;
            name: string;
        };
        postcode: {
            "@id": string;
            "@type": string;
            id: number;
            postcode: string;
        };
        utilities: never[];
        backGarden: boolean;
        communalGarden: boolean;
        frontGarden: boolean;
        privateGarden: boolean;
        terrace: boolean;
        patio: boolean;
        sharedBathroom: never[];
        images: never[];
        units: {
            "@id": string;
            "@type": string;
            id: number;
            unitLetter: string;
            type: {
                "@id": string;
                "@type": string;
                description: string;
            };
            weeklyPrice: number;
            availableFrom: string;
            floorNumber: number;
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
            currentPlace: string;
            eligibleTransitions: string[];
        }[];
        askedMonthlyPrice: number;
        landlordRelationships: {
            "@id": string;
            "@type": string;
            currentPlace: {
                active: boolean;
            };
            eligibleTransitions: never[];
        }[];
        arthurProperty: {
            "@type": string;
            "@id": string;
            id: number;
        };
        currentPlace: string;
        hasTopUp: boolean;
        eligibleTransitions: string[];
        createdAt: string;
        updatedAt: string;
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
