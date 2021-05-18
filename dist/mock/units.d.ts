export const units: {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": ({
        "@id": string;
        "@type": string;
        id: number;
        type: {
            "@id": string;
            "@type": string;
            id: number;
            description: string;
        };
        weeklyPrice: number;
        availableFrom: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            propertyName: string;
            floorplans: never[];
            images: never[];
            currentPlace: string;
            eligibleTransitions: string[];
        };
        floorNumber: number;
        features: {
            "@id": string;
            "@type": string;
            id: number;
            feature: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
            };
            amount: number;
        }[];
        tenantTenancies: never[];
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
        arthurUnit: {
            "@type": string;
            "@id": string;
            id: number;
            idWp: number;
        };
        view360: string;
        councilShow: boolean;
        currentPlace: {
            managed: number;
            occupied: number;
            unavailable_to_let: number;
        };
        hasDiscount: boolean;
        portals: never[];
        eligibleTransitions: string[];
        createdAt: string;
        updatedAt: string;
        unitLetter: string;
    } | {
        "@id": string;
        "@type": string;
        id: number;
        type: {
            "@id": string;
            "@type": string;
            id: number;
            description: string;
        };
        weeklyPrice: number;
        availableFrom: string;
        property: {
            "@id": string;
            "@type": string;
            id: number;
            propertyName: string;
            floorplans: never[];
            images: never[];
            currentPlace: string;
            eligibleTransitions: string[];
        };
        floorNumber: number;
        features: {
            "@id": string;
            "@type": string;
            id: number;
            feature: {
                "@id": string;
                "@type": string;
                id: number;
                name: string;
            };
            amount: number;
        }[];
        tenantTenancies: never[];
        images: never[];
        view360: string;
        councilShow: boolean;
        currentPlace: {
            managed: number;
            occupied: number;
            unavailable_to_let: number;
        };
        hasDiscount: boolean;
        portals: never[];
        eligibleTransitions: string[];
        createdAt: string;
        updatedAt: string;
        unitLetter: string;
        arthurUnit?: undefined;
    })[];
    "hydra:totalItems": number;
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
