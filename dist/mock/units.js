export const units = {
    "@context": "/api/contexts/Property",
    "@id": "/api/properties",
    "@type": "hydra:Collection",
    "hydra:member": [],
    "hydra:totalItems": 0,
    "hydra:view": {
        "@id": "/api/properties?page=1",
        "@type": "hydra:PartialCollectionView",
        "hydra:first": "/api/properties?page=1",
        "hydra:last": "/api/properties?page=6",
        "hydra:next": "/api/properties?page=2"
    },
    "hydra:search": {
        "@type": "hydra:IriTemplate",
        "hydra:template": "/api/properties{?address,agent,agent[],area,area[],currentPlace,currentPlace[],arthurProperty.id,arthurProperty.id[],hmo}",
        "hydra:variableRepresentation": "BasicRepresentation",
        "hydra:mapping": [
            {
                "@type": "IriTemplateMapping",
                "variable": "address",
                "property": "address",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "agent",
                "property": "agent",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "agent[]",
                "property": "agent",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "area",
                "property": "area",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "area[]",
                "property": "area",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "currentPlace",
                "property": "currentPlace",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "currentPlace[]",
                "property": "currentPlace",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "arthurProperty.id",
                "property": "arthurProperty.id",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "arthurProperty.id[]",
                "property": "arthurProperty.id",
                "required": false
            },
            {
                "@type": "IriTemplateMapping",
                "variable": "hmo",
                "property": "hmo",
                "required": false
            }
        ]
    }
};
