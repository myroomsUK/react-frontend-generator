export namespace landlordRelationship {
    export const id: number;
    export const code: string;
    export namespace property {
        const id_1: number;
        export { id_1 as id };
        export const type: string;
        export const propertyName: string;
        export const address: string;
        export const floorplans: never[];
        export const country: string;
        export const city: string;
        export const county: string;
        export const area: string;
        export const neighborhood: string;
        export const postcode: string;
        export const images: never[];
        export const units: {
            id: number;
            unitLetter: string;
            type: string;
            weeklyPrice: number;
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
            currentPlace: {
                managed: number;
                occupied: number;
                unavailable_to_let: number;
            };
            eligibleTransitions: string[];
        }[];
        export const askedMonthlyPrice: number;
        export const currentPlace: string;
        export const eligibleTransitions: string[];
    }
    export namespace landlord {
        const id_2: number;
        export { id_2 as id };
        export namespace personalData {
            const id_3: number;
            export { id_3 as id };
            export const name: string;
            export const surname: string;
            export const address1: string;
            export const email: string;
            export const mobile: string;
        }
    }
    export namespace firstLandlordTenancy {
        export namespace landlordContract {
            export const months: number;
            export const fee: number;
            export const payments: never[];
            export const endDate: string;
            const currentPlace_1: string;
            export { currentPlace_1 as currentPlace };
            const id_4: number;
            export { id_4 as id };
            export const startDate: string;
            const eligibleTransitions_1: string[];
            export { eligibleTransitions_1 as eligibleTransitions };
        }
        const id_5: number;
        export { id_5 as id };
        export const rent: number;
        const currentPlace_2: string;
        export { currentPlace_2 as currentPlace };
        const eligibleTransitions_2: string[];
        export { eligibleTransitions_2 as eligibleTransitions };
    }
    export const renewals: never[];
    export namespace activeTenancy {
        export namespace landlordContract_1 {
            const months_1: number;
            export { months_1 as months };
            const fee_1: number;
            export { fee_1 as fee };
            const payments_1: never[];
            export { payments_1 as payments };
            const endDate_1: string;
            export { endDate_1 as endDate };
            const currentPlace_3: string;
            export { currentPlace_3 as currentPlace };
            const id_6: number;
            export { id_6 as id };
            const startDate_1: string;
            export { startDate_1 as startDate };
            const eligibleTransitions_3: string[];
            export { eligibleTransitions_3 as eligibleTransitions };
        }
        export { landlordContract_1 as landlordContract };
        const id_7: number;
        export { id_7 as id };
        const rent_1: number;
        export { rent_1 as rent };
        const currentPlace_4: string;
        export { currentPlace_4 as currentPlace };
        const eligibleTransitions_4: string[];
        export { eligibleTransitions_4 as eligibleTransitions };
    }
    export namespace currentPlace_5 {
        const active: boolean;
    }
    export { currentPlace_5 as currentPlace };
    const eligibleTransitions_5: never[];
    export { eligibleTransitions_5 as eligibleTransitions };
}
