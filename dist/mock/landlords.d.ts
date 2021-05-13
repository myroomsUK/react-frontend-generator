export const landlords: {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": {
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
        };
        landlordRelationships: string[];
    }[];
    "hydra:totalItems": number;
    "hydra:view": {
        "@id": string;
        "@type": string;
        "hydra:first": string;
        "hydra:last": string;
        "hydra:next": string;
    };
};
