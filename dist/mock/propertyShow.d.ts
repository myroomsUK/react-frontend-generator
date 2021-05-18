export namespace propertyShow {
    const id: number;
    const service: string;
    const hmo: boolean;
    namespace type {
        const id_1: number;
        export { id_1 as id };
        export const description: string;
    }
    const propertyName: string;
    const address: string;
    const rentableUnits: number;
    const maximumOccupancy: number;
    const bathrooms: number;
    const floors: number;
    const bedrooms: number;
    const hasPartition: boolean;
    const floorplans: never[];
    const separateToilet: number;
    const parking: boolean;
    const concierge: boolean;
    const lift: boolean;
    const floorNumber: number;
    const gym: boolean;
    const spa: boolean;
    const sharedBPG: string;
    const woodenFloors: boolean;
    const carpet: boolean;
    const smokeAlarm: boolean;
    const CODetector: boolean;
    const storageRoom: boolean;
    const livingRoom: never[];
    const kitchen: never[];
    namespace country {
        const id_2: number;
        export { id_2 as id };
        export const name: string;
    }
    namespace city {
        const id_3: number;
        export { id_3 as id };
        const name_1: string;
        export { name_1 as name };
    }
    namespace county {
        const id_4: number;
        export { id_4 as id };
        const name_2: string;
        export { name_2 as name };
    }
    namespace area {
        const id_5: number;
        export { id_5 as id };
        const name_3: string;
        export { name_3 as name };
    }
    namespace neighborhood {
        const id_6: number;
        export { id_6 as id };
        const name_4: string;
        export { name_4 as name };
    }
    namespace postcode {
        const id_7: number;
        export { id_7 as id };
        const postcode_1: string;
        export { postcode_1 as postcode };
    }
    const utilities: never[];
    const backGarden: boolean;
    const communalGarden: boolean;
    const frontGarden: boolean;
    const privateGarden: boolean;
    const terrace: boolean;
    const patio: boolean;
    const sharedBathroom: never[];
    const images: {
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
    const units: {
        id: number;
        unitLetter: string;
        type: {
            description: string;
        };
        weeklyPrice: number;
        availableFrom: string;
        floorNumber: number;
        images: {
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
    }[];
    const askedMonthlyPrice: number;
    const landlordRelationships: {
        currentPlace: {
            active: boolean;
        };
        eligibleTransitions: never[];
    }[];
    namespace arthurProperty {
        const id_8: number;
        export { id_8 as id };
    }
    const currentPlace: string;
    const hasTopUp: boolean;
    const eligibleTransitions: string[];
    const createdAt: string;
    const updatedAt: string;
}
