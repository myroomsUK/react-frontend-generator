export const units: {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": never[];
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
