export namespace model {
    export namespace negotiations {
        export namespace model {
            export namespace id {
                export const type: string;
                export const nullable: boolean;
                export const write: boolean;
                export const read: boolean;
                export const validators: string[];
                export const errorMessages: string[];
                const id_1: string;
                export { id_1 as id };
                export const label: string;
            }
            export namespace acceptedOffer {
                const type_1: string;
                export { type_1 as type };
                const nullable_1: boolean;
                export { nullable_1 as nullable };
                const write_1: boolean;
                export { write_1 as write };
                const read_1: boolean;
                export { read_1 as read };
                const validators_1: string[];
                export { validators_1 as validators };
                const errorMessages_1: string[];
                export { errorMessages_1 as errorMessages };
                const id_2: string;
                export { id_2 as id };
                const label_1: string;
                export { label_1 as label };
            }
            export namespace negotiationOffers {
                export const targetClass: string;
                const type_2: string;
                export { type_2 as type };
                const nullable_2: boolean;
                export { nullable_2 as nullable };
                const write_2: boolean;
                export { write_2 as write };
                const read_2: boolean;
                export { read_2 as read };
                export namespace resource {
                    export namespace model_1 {
                        export namespace id_3 {
                            const type_3: string;
                            export { type_3 as type };
                            const nullable_3: boolean;
                            export { nullable_3 as nullable };
                            const write_3: boolean;
                            export { write_3 as write };
                            const read_3: boolean;
                            export { read_3 as read };
                            const validators_2: string[];
                            export { validators_2 as validators };
                            const errorMessages_2: string[];
                            export { errorMessages_2 as errorMessages };
                            const id_4: string;
                            export { id_4 as id };
                            const label_2: string;
                            export { label_2 as label };
                        }
                        export { id_3 as id };
                        export namespace offer {
                            const type_4: string;
                            export { type_4 as type };
                            const nullable_4: boolean;
                            export { nullable_4 as nullable };
                            const write_4: boolean;
                            export { write_4 as write };
                            const read_4: boolean;
                            export { read_4 as read };
                            const validators_3: string[];
                            export { validators_3 as validators };
                            const errorMessages_3: string[];
                            export { errorMessages_3 as errorMessages };
                            const id_5: string;
                            export { id_5 as id };
                            const label_3: string;
                            export { label_3 as label };
                        }
                        export namespace currentPlace {
                            const targetClass_1: string;
                            export { targetClass_1 as targetClass };
                            export const optionsName: string;
                            const type_5: string;
                            export { type_5 as type };
                            const nullable_5: boolean;
                            export { nullable_5 as nullable };
                            const write_5: boolean;
                            export { write_5 as write };
                            const read_5: boolean;
                            export { read_5 as read };
                            export const options: {
                                id: string;
                                label: string;
                            }[];
                            const validators_4: string[];
                            export { validators_4 as validators };
                            const errorMessages_4: string[];
                            export { errorMessages_4 as errorMessages };
                            const id_6: string;
                            export { id_6 as id };
                            const label_4: string;
                            export { label_4 as label };
                        }
                        export namespace requestedTransition {
                            const type_6: string;
                            export { type_6 as type };
                            const nullable_6: boolean;
                            export { nullable_6 as nullable };
                            const write_6: boolean;
                            export { write_6 as write };
                            const read_6: boolean;
                            export { read_6 as read };
                            const id_7: string;
                            export { id_7 as id };
                            const label_5: string;
                            export { label_5 as label };
                        }
                        export namespace eligibleTransitions {
                            const id_8: string;
                            export { id_8 as id };
                            const label_6: string;
                            export { label_6 as label };
                        }
                    }
                    export { model_1 as model };
                    export const title: string;
                    export const resourceName: string;
                }
                const resourceName_1: string;
                export { resourceName_1 as resourceName };
                const validators_5: string[];
                export { validators_5 as validators };
                const errorMessages_5: string[];
                export { errorMessages_5 as errorMessages };
                const id_9: string;
                export { id_9 as id };
                const label_7: string;
                export { label_7 as label };
            }
            export namespace currentPlace_1 {
                const targetClass_2: string;
                export { targetClass_2 as targetClass };
                const optionsName_1: string;
                export { optionsName_1 as optionsName };
                const type_7: string;
                export { type_7 as type };
                const nullable_7: boolean;
                export { nullable_7 as nullable };
                const write_7: boolean;
                export { write_7 as write };
                const read_7: boolean;
                export { read_7 as read };
                const options_1: {
                    id: string;
                    label: string;
                }[];
                export { options_1 as options };
                const validators_6: string[];
                export { validators_6 as validators };
                const errorMessages_6: string[];
                export { errorMessages_6 as errorMessages };
                const id_10: string;
                export { id_10 as id };
                const label_8: string;
                export { label_8 as label };
            }
            export { currentPlace_1 as currentPlace };
            export namespace requestedTransition_1 {
                const type_8: string;
                export { type_8 as type };
                const nullable_8: boolean;
                export { nullable_8 as nullable };
                const write_8: boolean;
                export { write_8 as write };
                const read_8: boolean;
                export { read_8 as read };
                const id_11: string;
                export { id_11 as id };
                const label_9: string;
                export { label_9 as label };
            }
            export { requestedTransition_1 as requestedTransition };
            export namespace eligibleTransitions_1 {
                const id_12: string;
                export { id_12 as id };
                const label_10: string;
                export { label_10 as label };
            }
            export { eligibleTransitions_1 as eligibleTransitions };
        }
        const title_1: string;
        export { title_1 as title };
        const resourceName_2: string;
        export { resourceName_2 as resourceName };
    }
    export namespace negotiation_offers {
        export namespace model_2 {
            export namespace currentPlace_2 {
                const targetClass_3: string;
                export { targetClass_3 as targetClass };
                const optionsName_2: string;
                export { optionsName_2 as optionsName };
                const type_9: string;
                export { type_9 as type };
                const nullable_9: boolean;
                export { nullable_9 as nullable };
                const write_9: boolean;
                export { write_9 as write };
                const read_9: boolean;
                export { read_9 as read };
                const options_2: {
                    id: string;
                    label: string;
                }[];
                export { options_2 as options };
                const validators_7: string[];
                export { validators_7 as validators };
                const errorMessages_7: string[];
                export { errorMessages_7 as errorMessages };
                const id_13: string;
                export { id_13 as id };
                const label_11: string;
                export { label_11 as label };
            }
            export { currentPlace_2 as currentPlace };
            export namespace requestedTransition_2 {
                const type_10: string;
                export { type_10 as type };
                const nullable_10: boolean;
                export { nullable_10 as nullable };
                const write_10: boolean;
                export { write_10 as write };
                const read_10: boolean;
                export { read_10 as read };
                const id_14: string;
                export { id_14 as id };
                const label_12: string;
                export { label_12 as label };
            }
            export { requestedTransition_2 as requestedTransition };
            export namespace eligibleTransitions_2 {
                const id_15: string;
                export { id_15 as id };
                const label_13: string;
                export { label_13 as label };
            }
            export { eligibleTransitions_2 as eligibleTransitions };
        }
        export { model_2 as model };
        const title_2: string;
        export { title_2 as title };
        const resourceName_3: string;
        export { resourceName_3 as resourceName };
    }
    export namespace agents {
        export namespace model_3 {
            export namespace id_16 {
                const type_11: string;
                export { type_11 as type };
                const nullable_11: boolean;
                export { nullable_11 as nullable };
                const write_11: boolean;
                export { write_11 as write };
                const read_11: boolean;
                export { read_11 as read };
                const validators_8: string[];
                export { validators_8 as validators };
                const errorMessages_8: string[];
                export { errorMessages_8 as errorMessages };
                const id_17: string;
                export { id_17 as id };
                const label_14: string;
                export { label_14 as label };
            }
            export { id_16 as id };
            export namespace fullName {
                const type_12: string;
                export { type_12 as type };
                const nullable_12: boolean;
                export { nullable_12 as nullable };
                const write_12: boolean;
                export { write_12 as write };
                const read_12: boolean;
                export { read_12 as read };
                const validators_9: string[];
                export { validators_9 as validators };
                const errorMessages_9: string[];
                export { errorMessages_9 as errorMessages };
                const id_18: string;
                export { id_18 as id };
                const label_15: string;
                export { label_15 as label };
            }
        }
        export { model_3 as model };
        const title_3: string;
        export { title_3 as title };
        const resourceName_4: string;
        export { resourceName_4 as resourceName };
    }
    export namespace bank_accounts {
        export namespace model_4 {
            export namespace id_19 {
                const type_13: string;
                export { type_13 as type };
                const nullable_13: boolean;
                export { nullable_13 as nullable };
                const write_13: boolean;
                export { write_13 as write };
                const read_13: boolean;
                export { read_13 as read };
                const validators_10: string[];
                export { validators_10 as validators };
                const errorMessages_10: string[];
                export { errorMessages_10 as errorMessages };
                const id_20: string;
                export { id_20 as id };
                const label_16: string;
                export { label_16 as label };
            }
            export { id_19 as id };
            export namespace bankName {
                const type_14: string;
                export { type_14 as type };
                const nullable_14: boolean;
                export { nullable_14 as nullable };
                const write_14: boolean;
                export { write_14 as write };
                const read_14: boolean;
                export { read_14 as read };
                const id_21: string;
                export { id_21 as id };
                const label_17: string;
                export { label_17 as label };
            }
            export namespace accountName {
                const type_15: string;
                export { type_15 as type };
                const nullable_15: boolean;
                export { nullable_15 as nullable };
                const write_15: boolean;
                export { write_15 as write };
                const read_15: boolean;
                export { read_15 as read };
                const id_22: string;
                export { id_22 as id };
                const label_18: string;
                export { label_18 as label };
            }
            export namespace accountNumber {
                const type_16: string;
                export { type_16 as type };
                const nullable_16: boolean;
                export { nullable_16 as nullable };
                const write_16: boolean;
                export { write_16 as write };
                const read_16: boolean;
                export { read_16 as read };
                const id_23: string;
                export { id_23 as id };
                const label_19: string;
                export { label_19 as label };
            }
            export namespace sortCode {
                const type_17: string;
                export { type_17 as type };
                const nullable_17: boolean;
                export { nullable_17 as nullable };
                const write_17: boolean;
                export { write_17 as write };
                const read_17: boolean;
                export { read_17 as read };
                const id_24: string;
                export { id_24 as id };
                const label_20: string;
                export { label_20 as label };
            }
            export namespace bic {
                const type_18: string;
                export { type_18 as type };
                const nullable_18: boolean;
                export { nullable_18 as nullable };
                const write_18: boolean;
                export { write_18 as write };
                const read_18: boolean;
                export { read_18 as read };
                const id_25: string;
                export { id_25 as id };
                const label_21: string;
                export { label_21 as label };
            }
            export namespace iban {
                const type_19: string;
                export { type_19 as type };
                const nullable_19: boolean;
                export { nullable_19 as nullable };
                const write_19: boolean;
                export { write_19 as write };
                const read_19: boolean;
                export { read_19 as read };
                const id_26: string;
                export { id_26 as id };
                const label_22: string;
                export { label_22 as label };
            }
        }
        export { model_4 as model };
        const title_4: string;
        export { title_4 as title };
        const resourceName_5: string;
        export { resourceName_5 as resourceName };
    }
    export namespace contracts {
        export namespace model_5 {
            export namespace id_27 {
                const type_20: string;
                export { type_20 as type };
                const nullable_20: boolean;
                export { nullable_20 as nullable };
                const write_20: boolean;
                export { write_20 as write };
                const read_20: boolean;
                export { read_20 as read };
                const validators_11: string[];
                export { validators_11 as validators };
                const errorMessages_11: string[];
                export { errorMessages_11 as errorMessages };
                const id_28: string;
                export { id_28 as id };
                const label_23: string;
                export { label_23 as label };
            }
            export { id_27 as id };
            export namespace unsignedFile {
                const type_21: string;
                export { type_21 as type };
                const nullable_21: boolean;
                export { nullable_21 as nullable };
                const write_21: boolean;
                export { write_21 as write };
                const read_21: boolean;
                export { read_21 as read };
                const id_29: string;
                export { id_29 as id };
                const label_24: string;
                export { label_24 as label };
            }
            export namespace issuerSignedFile {
                const type_22: string;
                export { type_22 as type };
                const nullable_22: boolean;
                export { nullable_22 as nullable };
                const write_22: boolean;
                export { write_22 as write };
                const read_22: boolean;
                export { read_22 as read };
                const id_30: string;
                export { id_30 as id };
                const label_25: string;
                export { label_25 as label };
            }
            export namespace beneficiarySignedFile {
                const type_23: string;
                export { type_23 as type };
                const nullable_23: boolean;
                export { nullable_23 as nullable };
                const write_23: boolean;
                export { write_23 as write };
                const read_23: boolean;
                export { read_23 as read };
                const id_31: string;
                export { id_31 as id };
                const label_26: string;
                export { label_26 as label };
            }
            export namespace startDate {
                const type_24: string;
                export { type_24 as type };
                const nullable_24: boolean;
                export { nullable_24 as nullable };
                const write_24: boolean;
                export { write_24 as write };
                const read_24: boolean;
                export { read_24 as read };
                const id_32: string;
                export { id_32 as id };
                const label_27: string;
                export { label_27 as label };
            }
            export namespace issuer {
                const targetClass_4: string;
                export { targetClass_4 as targetClass };
                const type_25: string;
                export { type_25 as type };
                const nullable_25: boolean;
                export { nullable_25 as nullable };
                const write_25: boolean;
                export { write_25 as write };
                const read_25: boolean;
                export { read_25 as read };
                export namespace resource_1 {
                    export namespace model_6 {
                        export namespace id_33 {
                            const type_26: string;
                            export { type_26 as type };
                            const nullable_26: boolean;
                            export { nullable_26 as nullable };
                            const write_26: boolean;
                            export { write_26 as write };
                            const read_26: boolean;
                            export { read_26 as read };
                            const validators_12: string[];
                            export { validators_12 as validators };
                            const errorMessages_12: string[];
                            export { errorMessages_12 as errorMessages };
                            const id_34: string;
                            export { id_34 as id };
                            const label_28: string;
                            export { label_28 as label };
                        }
                        export { id_33 as id };
                        export namespace name {
                            const type_27: string;
                            export { type_27 as type };
                            const nullable_27: boolean;
                            export { nullable_27 as nullable };
                            const write_27: boolean;
                            export { write_27 as write };
                            const read_27: boolean;
                            export { read_27 as read };
                            const id_35: string;
                            export { id_35 as id };
                            const label_29: string;
                            export { label_29 as label };
                        }
                        export namespace surname {
                            const type_28: string;
                            export { type_28 as type };
                            const nullable_28: boolean;
                            export { nullable_28 as nullable };
                            const write_28: boolean;
                            export { write_28 as write };
                            const read_28: boolean;
                            export { read_28 as read };
                            const id_36: string;
                            export { id_36 as id };
                            const label_30: string;
                            export { label_30 as label };
                        }
                        export namespace address1 {
                            const type_29: string;
                            export { type_29 as type };
                            const nullable_29: boolean;
                            export { nullable_29 as nullable };
                            const write_29: boolean;
                            export { write_29 as write };
                            const read_29: boolean;
                            export { read_29 as read };
                            const id_37: string;
                            export { id_37 as id };
                            const label_31: string;
                            export { label_31 as label };
                        }
                        export namespace address2 {
                            const type_30: string;
                            export { type_30 as type };
                            const nullable_30: boolean;
                            export { nullable_30 as nullable };
                            const write_30: boolean;
                            export { write_30 as write };
                            const read_30: boolean;
                            export { read_30 as read };
                            const id_38: string;
                            export { id_38 as id };
                            const label_32: string;
                            export { label_32 as label };
                        }
                        export namespace postcode {
                            const targetClass_5: string;
                            export { targetClass_5 as targetClass };
                            const type_31: string;
                            export { type_31 as type };
                            const nullable_31: boolean;
                            export { nullable_31 as nullable };
                            const write_31: boolean;
                            export { write_31 as write };
                            const read_31: boolean;
                            export { read_31 as read };
                            export namespace resource_2 {
                                export namespace model_7 {
                                    export namespace postcode_1 {
                                        const type_32: string;
                                        export { type_32 as type };
                                        const nullable_32: boolean;
                                        export { nullable_32 as nullable };
                                        const write_32: boolean;
                                        export { write_32 as write };
                                        const read_32: boolean;
                                        export { read_32 as read };
                                        const validators_13: string[];
                                        export { validators_13 as validators };
                                        const errorMessages_13: string[];
                                        export { errorMessages_13 as errorMessages };
                                        const id_39: string;
                                        export { id_39 as id };
                                        const label_33: string;
                                        export { label_33 as label };
                                    }
                                    export { postcode_1 as postcode };
                                }
                                export { model_7 as model };
                                const title_5: string;
                                export { title_5 as title };
                                const resourceName_6: string;
                                export { resourceName_6 as resourceName };
                            }
                            export { resource_2 as resource };
                            const resourceName_7: string;
                            export { resourceName_7 as resourceName };
                            export const optionText: string;
                            const id_40: string;
                            export { id_40 as id };
                            const label_34: string;
                            export { label_34 as label };
                        }
                        export namespace postcode2 {
                            const targetClass_6: string;
                            export { targetClass_6 as targetClass };
                            const type_33: string;
                            export { type_33 as type };
                            const nullable_33: boolean;
                            export { nullable_33 as nullable };
                            const write_33: boolean;
                            export { write_33 as write };
                            const read_33: boolean;
                            export { read_33 as read };
                            export namespace resource_3 {
                                export namespace model_8 {
                                    export namespace postcode_2 {
                                        const type_34: string;
                                        export { type_34 as type };
                                        const nullable_34: boolean;
                                        export { nullable_34 as nullable };
                                        const write_34: boolean;
                                        export { write_34 as write };
                                        const read_34: boolean;
                                        export { read_34 as read };
                                        const validators_14: string[];
                                        export { validators_14 as validators };
                                        const errorMessages_14: string[];
                                        export { errorMessages_14 as errorMessages };
                                        const id_41: string;
                                        export { id_41 as id };
                                        const label_35: string;
                                        export { label_35 as label };
                                    }
                                    export { postcode_2 as postcode };
                                }
                                export { model_8 as model };
                                const title_6: string;
                                export { title_6 as title };
                                const resourceName_8: string;
                                export { resourceName_8 as resourceName };
                            }
                            export { resource_3 as resource };
                            const resourceName_9: string;
                            export { resourceName_9 as resourceName };
                            const optionText_1: string;
                            export { optionText_1 as optionText };
                            const id_42: string;
                            export { id_42 as id };
                            const label_36: string;
                            export { label_36 as label };
                        }
                        export namespace email {
                            const type_35: string;
                            export { type_35 as type };
                            const nullable_35: boolean;
                            export { nullable_35 as nullable };
                            const write_35: boolean;
                            export { write_35 as write };
                            const read_35: boolean;
                            export { read_35 as read };
                            const id_43: string;
                            export { id_43 as id };
                            const label_37: string;
                            export { label_37 as label };
                        }
                        export namespace telephone {
                            const type_36: string;
                            export { type_36 as type };
                            const nullable_36: boolean;
                            export { nullable_36 as nullable };
                            const write_36: boolean;
                            export { write_36 as write };
                            const read_36: boolean;
                            export { read_36 as read };
                            const id_44: string;
                            export { id_44 as id };
                            const label_38: string;
                            export { label_38 as label };
                        }
                        export namespace mobile {
                            const type_37: string;
                            export { type_37 as type };
                            const nullable_37: boolean;
                            export { nullable_37 as nullable };
                            const write_37: boolean;
                            export { write_37 as write };
                            const read_37: boolean;
                            export { read_37 as read };
                            const id_45: string;
                            export { id_45 as id };
                            const label_39: string;
                            export { label_39 as label };
                        }
                        export namespace nino {
                            const type_38: string;
                            export { type_38 as type };
                            const nullable_38: boolean;
                            export { nullable_38 as nullable };
                            const write_38: boolean;
                            export { write_38 as write };
                            const read_38: boolean;
                            export { read_38 as read };
                            const id_46: string;
                            export { id_46 as id };
                            const label_40: string;
                            export { label_40 as label };
                        }
                    }
                    export { model_6 as model };
                    const title_7: string;
                    export { title_7 as title };
                    const resourceName_10: string;
                    export { resourceName_10 as resourceName };
                }
                export { resource_1 as resource };
                const resourceName_11: string;
                export { resourceName_11 as resourceName };
                const optionText_2: string;
                export { optionText_2 as optionText };
                const id_47: string;
                export { id_47 as id };
                const label_41: string;
                export { label_41 as label };
            }
            export namespace beneficiary {
                const targetClass_7: string;
                export { targetClass_7 as targetClass };
                const type_39: string;
                export { type_39 as type };
                const nullable_39: boolean;
                export { nullable_39 as nullable };
                const write_39: boolean;
                export { write_39 as write };
                const read_39: boolean;
                export { read_39 as read };
                export namespace resource_4 {
                    export namespace model_9 {
                        export namespace id_48 {
                            const type_40: string;
                            export { type_40 as type };
                            const nullable_40: boolean;
                            export { nullable_40 as nullable };
                            const write_40: boolean;
                            export { write_40 as write };
                            const read_40: boolean;
                            export { read_40 as read };
                            const validators_15: string[];
                            export { validators_15 as validators };
                            const errorMessages_15: string[];
                            export { errorMessages_15 as errorMessages };
                            const id_49: string;
                            export { id_49 as id };
                            const label_42: string;
                            export { label_42 as label };
                        }
                        export { id_48 as id };
                        export namespace name_1 {
                            const type_41: string;
                            export { type_41 as type };
                            const nullable_41: boolean;
                            export { nullable_41 as nullable };
                            const write_41: boolean;
                            export { write_41 as write };
                            const read_41: boolean;
                            export { read_41 as read };
                            const id_50: string;
                            export { id_50 as id };
                            const label_43: string;
                            export { label_43 as label };
                        }
                        export { name_1 as name };
                        export namespace surname_1 {
                            const type_42: string;
                            export { type_42 as type };
                            const nullable_42: boolean;
                            export { nullable_42 as nullable };
                            const write_42: boolean;
                            export { write_42 as write };
                            const read_42: boolean;
                            export { read_42 as read };
                            const id_51: string;
                            export { id_51 as id };
                            const label_44: string;
                            export { label_44 as label };
                        }
                        export { surname_1 as surname };
                        export namespace address1_1 {
                            const type_43: string;
                            export { type_43 as type };
                            const nullable_43: boolean;
                            export { nullable_43 as nullable };
                            const write_43: boolean;
                            export { write_43 as write };
                            const read_43: boolean;
                            export { read_43 as read };
                            const id_52: string;
                            export { id_52 as id };
                            const label_45: string;
                            export { label_45 as label };
                        }
                        export { address1_1 as address1 };
                        export namespace address2_1 {
                            const type_44: string;
                            export { type_44 as type };
                            const nullable_44: boolean;
                            export { nullable_44 as nullable };
                            const write_44: boolean;
                            export { write_44 as write };
                            const read_44: boolean;
                            export { read_44 as read };
                            const id_53: string;
                            export { id_53 as id };
                            const label_46: string;
                            export { label_46 as label };
                        }
                        export { address2_1 as address2 };
                        export namespace postcode_3 {
                            const targetClass_8: string;
                            export { targetClass_8 as targetClass };
                            const type_45: string;
                            export { type_45 as type };
                            const nullable_45: boolean;
                            export { nullable_45 as nullable };
                            const write_45: boolean;
                            export { write_45 as write };
                            const read_45: boolean;
                            export { read_45 as read };
                            export namespace resource_5 {
                                export namespace model_10 {
                                    export namespace postcode_4 {
                                        const type_46: string;
                                        export { type_46 as type };
                                        const nullable_46: boolean;
                                        export { nullable_46 as nullable };
                                        const write_46: boolean;
                                        export { write_46 as write };
                                        const read_46: boolean;
                                        export { read_46 as read };
                                        const validators_16: string[];
                                        export { validators_16 as validators };
                                        const errorMessages_16: string[];
                                        export { errorMessages_16 as errorMessages };
                                        const id_54: string;
                                        export { id_54 as id };
                                        const label_47: string;
                                        export { label_47 as label };
                                    }
                                    export { postcode_4 as postcode };
                                }
                                export { model_10 as model };
                                const title_8: string;
                                export { title_8 as title };
                                const resourceName_12: string;
                                export { resourceName_12 as resourceName };
                            }
                            export { resource_5 as resource };
                            const resourceName_13: string;
                            export { resourceName_13 as resourceName };
                            const optionText_3: string;
                            export { optionText_3 as optionText };
                            const id_55: string;
                            export { id_55 as id };
                            const label_48: string;
                            export { label_48 as label };
                        }
                        export { postcode_3 as postcode };
                        export namespace postcode2_1 {
                            const targetClass_9: string;
                            export { targetClass_9 as targetClass };
                            const type_47: string;
                            export { type_47 as type };
                            const nullable_47: boolean;
                            export { nullable_47 as nullable };
                            const write_47: boolean;
                            export { write_47 as write };
                            const read_47: boolean;
                            export { read_47 as read };
                            export namespace resource_6 {
                                export namespace model_11 {
                                    export namespace postcode_5 {
                                        const type_48: string;
                                        export { type_48 as type };
                                        const nullable_48: boolean;
                                        export { nullable_48 as nullable };
                                        const write_48: boolean;
                                        export { write_48 as write };
                                        const read_48: boolean;
                                        export { read_48 as read };
                                        const validators_17: string[];
                                        export { validators_17 as validators };
                                        const errorMessages_17: string[];
                                        export { errorMessages_17 as errorMessages };
                                        const id_56: string;
                                        export { id_56 as id };
                                        const label_49: string;
                                        export { label_49 as label };
                                    }
                                    export { postcode_5 as postcode };
                                }
                                export { model_11 as model };
                                const title_9: string;
                                export { title_9 as title };
                                const resourceName_14: string;
                                export { resourceName_14 as resourceName };
                            }
                            export { resource_6 as resource };
                            const resourceName_15: string;
                            export { resourceName_15 as resourceName };
                            const optionText_4: string;
                            export { optionText_4 as optionText };
                            const id_57: string;
                            export { id_57 as id };
                            const label_50: string;
                            export { label_50 as label };
                        }
                        export { postcode2_1 as postcode2 };
                        export namespace email_1 {
                            const type_49: string;
                            export { type_49 as type };
                            const nullable_49: boolean;
                            export { nullable_49 as nullable };
                            const write_49: boolean;
                            export { write_49 as write };
                            const read_49: boolean;
                            export { read_49 as read };
                            const id_58: string;
                            export { id_58 as id };
                            const label_51: string;
                            export { label_51 as label };
                        }
                        export { email_1 as email };
                        export namespace telephone_1 {
                            const type_50: string;
                            export { type_50 as type };
                            const nullable_50: boolean;
                            export { nullable_50 as nullable };
                            const write_50: boolean;
                            export { write_50 as write };
                            const read_50: boolean;
                            export { read_50 as read };
                            const id_59: string;
                            export { id_59 as id };
                            const label_52: string;
                            export { label_52 as label };
                        }
                        export { telephone_1 as telephone };
                        export namespace mobile_1 {
                            const type_51: string;
                            export { type_51 as type };
                            const nullable_51: boolean;
                            export { nullable_51 as nullable };
                            const write_51: boolean;
                            export { write_51 as write };
                            const read_51: boolean;
                            export { read_51 as read };
                            const id_60: string;
                            export { id_60 as id };
                            const label_53: string;
                            export { label_53 as label };
                        }
                        export { mobile_1 as mobile };
                        export namespace nino_1 {
                            const type_52: string;
                            export { type_52 as type };
                            const nullable_52: boolean;
                            export { nullable_52 as nullable };
                            const write_52: boolean;
                            export { write_52 as write };
                            const read_52: boolean;
                            export { read_52 as read };
                            const id_61: string;
                            export { id_61 as id };
                            const label_54: string;
                            export { label_54 as label };
                        }
                        export { nino_1 as nino };
                    }
                    export { model_9 as model };
                    const title_10: string;
                    export { title_10 as title };
                    const resourceName_16: string;
                    export { resourceName_16 as resourceName };
                }
                export { resource_4 as resource };
                const resourceName_17: string;
                export { resourceName_17 as resourceName };
                const optionText_5: string;
                export { optionText_5 as optionText };
                const id_62: string;
                export { id_62 as id };
                const label_55: string;
                export { label_55 as label };
            }
            export namespace useDocusign {
                const type_53: string;
                export { type_53 as type };
                const nullable_53: boolean;
                export { nullable_53 as nullable };
                const write_53: boolean;
                export { write_53 as write };
                const read_53: boolean;
                export { read_53 as read };
                const validators_18: string[];
                export { validators_18 as validators };
                const errorMessages_18: string[];
                export { errorMessages_18 as errorMessages };
                const id_63: string;
                export { id_63 as id };
                const label_56: string;
                export { label_56 as label };
            }
        }
        export { model_5 as model };
        const title_11: string;
        export { title_11 as title };
        const resourceName_18: string;
        export { resourceName_18 as resourceName };
    }
    export namespace holding_deposit_contracts {
        export namespace model_12 {
            export namespace currentPlace_3 {
                const targetClass_10: string;
                export { targetClass_10 as targetClass };
                const optionsName_3: string;
                export { optionsName_3 as optionsName };
                const type_54: string;
                export { type_54 as type };
                const nullable_54: boolean;
                export { nullable_54 as nullable };
                const write_54: boolean;
                export { write_54 as write };
                const read_54: boolean;
                export { read_54 as read };
                const options_3: {
                    id: string;
                    label: string;
                }[];
                export { options_3 as options };
                const validators_19: string[];
                export { validators_19 as validators };
                const errorMessages_19: string[];
                export { errorMessages_19 as errorMessages };
                const id_64: string;
                export { id_64 as id };
                const label_57: string;
                export { label_57 as label };
            }
            export { currentPlace_3 as currentPlace };
            export namespace unsignedFile_1 {
                const type_55: string;
                export { type_55 as type };
                const nullable_55: boolean;
                export { nullable_55 as nullable };
                const write_55: boolean;
                export { write_55 as write };
                const read_55: boolean;
                export { read_55 as read };
                const id_65: string;
                export { id_65 as id };
                const label_58: string;
                export { label_58 as label };
            }
            export { unsignedFile_1 as unsignedFile };
            export namespace issuerSignedFile_1 {
                const type_56: string;
                export { type_56 as type };
                const nullable_56: boolean;
                export { nullable_56 as nullable };
                const write_56: boolean;
                export { write_56 as write };
                const read_56: boolean;
                export { read_56 as read };
                const id_66: string;
                export { id_66 as id };
                const label_59: string;
                export { label_59 as label };
            }
            export { issuerSignedFile_1 as issuerSignedFile };
            export namespace beneficiarySignedFile_1 {
                const type_57: string;
                export { type_57 as type };
                const nullable_57: boolean;
                export { nullable_57 as nullable };
                const write_57: boolean;
                export { write_57 as write };
                const read_57: boolean;
                export { read_57 as read };
                const id_67: string;
                export { id_67 as id };
                const label_60: string;
                export { label_60 as label };
            }
            export { beneficiarySignedFile_1 as beneficiarySignedFile };
            export namespace requestedTransition_3 {
                const type_58: string;
                export { type_58 as type };
                const nullable_58: boolean;
                export { nullable_58 as nullable };
                const write_58: boolean;
                export { write_58 as write };
                const read_58: boolean;
                export { read_58 as read };
                const id_68: string;
                export { id_68 as id };
                const label_61: string;
                export { label_61 as label };
            }
            export { requestedTransition_3 as requestedTransition };
            export namespace eligibleTransitions_3 {
                const id_69: string;
                export { id_69 as id };
                const label_62: string;
                export { label_62 as label };
            }
            export { eligibleTransitions_3 as eligibleTransitions };
        }
        export { model_12 as model };
        const title_12: string;
        export { title_12 as title };
        const resourceName_19: string;
        export { resourceName_19 as resourceName };
    }
    export namespace landlord_contracts {
        export namespace model_13 {
            export namespace witnessSignedFile {
                const type_59: string;
                export { type_59 as type };
                const nullable_59: boolean;
                export { nullable_59 as nullable };
                const write_59: boolean;
                export { write_59 as write };
                const read_59: boolean;
                export { read_59 as read };
                const validators_20: string[];
                export { validators_20 as validators };
                const errorMessages_20: string[];
                export { errorMessages_20 as errorMessages };
                const id_70: string;
                export { id_70 as id };
                const label_63: string;
                export { label_63 as label };
            }
            export namespace months {
                const type_60: string;
                export { type_60 as type };
                const nullable_60: boolean;
                export { nullable_60 as nullable };
                const write_60: boolean;
                export { write_60 as write };
                const read_60: boolean;
                export { read_60 as read };
                const id_71: string;
                export { id_71 as id };
                const label_64: string;
                export { label_64 as label };
            }
            export namespace fee {
                const type_61: string;
                export { type_61 as type };
                const nullable_61: boolean;
                export { nullable_61 as nullable };
                const write_61: boolean;
                export { write_61 as write };
                const read_61: boolean;
                export { read_61 as read };
                const id_72: string;
                export { id_72 as id };
                const label_65: string;
                export { label_65 as label };
            }
            export namespace rentFreePeriod {
                const targetClass_11: string;
                export { targetClass_11 as targetClass };
                const optionsName_4: string;
                export { optionsName_4 as optionsName };
                const type_62: string;
                export { type_62 as type };
                const nullable_62: boolean;
                export { nullable_62 as nullable };
                const write_62: boolean;
                export { write_62 as write };
                const read_62: boolean;
                export { read_62 as read };
                const options_4: {
                    id: number;
                    label: string;
                }[];
                export { options_4 as options };
                const validators_21: string[];
                export { validators_21 as validators };
                const errorMessages_21: string[];
                export { errorMessages_21 as errorMessages };
                const id_73: string;
                export { id_73 as id };
                const label_66: string;
                export { label_66 as label };
            }
            export namespace deposit {
                const targetClass_12: string;
                export { targetClass_12 as targetClass };
                const optionsName_5: string;
                export { optionsName_5 as optionsName };
                const type_63: string;
                export { type_63 as type };
                const nullable_63: boolean;
                export { nullable_63 as nullable };
                const write_63: boolean;
                export { write_63 as write };
                const read_63: boolean;
                export { read_63 as read };
                const options_5: {
                    id: number;
                    label: string;
                }[];
                export { options_5 as options };
                const validators_22: string[];
                export { validators_22 as validators };
                const errorMessages_22: string[];
                export { errorMessages_22 as errorMessages };
                const id_74: string;
                export { id_74 as id };
                const label_67: string;
                export { label_67 as label };
            }
            export namespace payments {
                const targetClass_13: string;
                export { targetClass_13 as targetClass };
                const type_64: string;
                export { type_64 as type };
                const nullable_64: boolean;
                export { nullable_64 as nullable };
                const write_64: boolean;
                export { write_64 as write };
                const read_64: boolean;
                export { read_64 as read };
                export namespace resource_7 {
                    const model_14: never[];
                    export { model_14 as model };
                    const title_13: string;
                    export { title_13 as title };
                    const resourceName_20: string;
                    export { resourceName_20 as resourceName };
                }
                export { resource_7 as resource };
                const resourceName_21: string;
                export { resourceName_21 as resourceName };
                const validators_23: string[];
                export { validators_23 as validators };
                const errorMessages_23: string[];
                export { errorMessages_23 as errorMessages };
                const id_75: string;
                export { id_75 as id };
                const label_68: string;
                export { label_68 as label };
            }
            export namespace defaultPaymentDay {
                const type_65: string;
                export { type_65 as type };
                const nullable_65: boolean;
                export { nullable_65 as nullable };
                const write_65: boolean;
                export { write_65 as write };
                const read_65: boolean;
                export { read_65 as read };
                const id_76: string;
                export { id_76 as id };
                const label_69: string;
                export { label_69 as label };
            }
            export namespace endDate {
                const type_66: string;
                export { type_66 as type };
                const nullable_66: boolean;
                export { nullable_66 as nullable };
                const write_66: boolean;
                export { write_66 as write };
                const read_66: boolean;
                export { read_66 as read };
                const id_77: string;
                export { id_77 as id };
                const label_70: string;
                export { label_70 as label };
            }
            export namespace witnessFullName {
                const type_67: string;
                export { type_67 as type };
                const nullable_67: boolean;
                export { nullable_67 as nullable };
                const write_67: boolean;
                export { write_67 as write };
                const read_67: boolean;
                export { read_67 as read };
                const id_78: string;
                export { id_78 as id };
                const label_71: string;
                export { label_71 as label };
            }
            export namespace witnessEmail {
                const type_68: string;
                export { type_68 as type };
                const nullable_68: boolean;
                export { nullable_68 as nullable };
                const write_68: boolean;
                export { write_68 as write };
                const read_68: boolean;
                export { read_68 as read };
                const id_79: string;
                export { id_79 as id };
                const label_72: string;
                export { label_72 as label };
            }
            export namespace currentPlace_4 {
                const targetClass_14: string;
                export { targetClass_14 as targetClass };
                const optionsName_6: string;
                export { optionsName_6 as optionsName };
                const type_69: string;
                export { type_69 as type };
                const nullable_69: boolean;
                export { nullable_69 as nullable };
                const write_69: boolean;
                export { write_69 as write };
                const read_69: boolean;
                export { read_69 as read };
                const options_6: {
                    id: string;
                    label: string;
                }[];
                export { options_6 as options };
                const validators_24: string[];
                export { validators_24 as validators };
                const errorMessages_24: string[];
                export { errorMessages_24 as errorMessages };
                const id_80: string;
                export { id_80 as id };
                const label_73: string;
                export { label_73 as label };
            }
            export { currentPlace_4 as currentPlace };
            export namespace unsignedFile_2 {
                const type_70: string;
                export { type_70 as type };
                const nullable_70: boolean;
                export { nullable_70 as nullable };
                const write_70: boolean;
                export { write_70 as write };
                const read_70: boolean;
                export { read_70 as read };
                const id_81: string;
                export { id_81 as id };
                const label_74: string;
                export { label_74 as label };
            }
            export { unsignedFile_2 as unsignedFile };
            export namespace issuerSignedFile_2 {
                const type_71: string;
                export { type_71 as type };
                const nullable_71: boolean;
                export { nullable_71 as nullable };
                const write_71: boolean;
                export { write_71 as write };
                const read_71: boolean;
                export { read_71 as read };
                const id_82: string;
                export { id_82 as id };
                const label_75: string;
                export { label_75 as label };
            }
            export { issuerSignedFile_2 as issuerSignedFile };
            export namespace beneficiarySignedFile_2 {
                const type_72: string;
                export { type_72 as type };
                const nullable_72: boolean;
                export { nullable_72 as nullable };
                const write_72: boolean;
                export { write_72 as write };
                const read_72: boolean;
                export { read_72 as read };
                const id_83: string;
                export { id_83 as id };
                const label_76: string;
                export { label_76 as label };
            }
            export { beneficiarySignedFile_2 as beneficiarySignedFile };
            export namespace startDate_1 {
                const type_73: string;
                export { type_73 as type };
                const nullable_73: boolean;
                export { nullable_73 as nullable };
                const write_73: boolean;
                export { write_73 as write };
                const read_73: boolean;
                export { read_73 as read };
                const id_84: string;
                export { id_84 as id };
                const label_77: string;
                export { label_77 as label };
            }
            export { startDate_1 as startDate };
            export namespace requestedTransition_4 {
                const type_74: string;
                export { type_74 as type };
                const nullable_74: boolean;
                export { nullable_74 as nullable };
                const write_74: boolean;
                export { write_74 as write };
                const read_74: boolean;
                export { read_74 as read };
                const id_85: string;
                export { id_85 as id };
                const label_78: string;
                export { label_78 as label };
            }
            export { requestedTransition_4 as requestedTransition };
            export namespace eligibleTransitions_4 {
                const id_86: string;
                export { id_86 as id };
                const label_79: string;
                export { label_79 as label };
            }
            export { eligibleTransitions_4 as eligibleTransitions };
        }
        export { model_13 as model };
        const title_14: string;
        export { title_14 as title };
        const resourceName_22: string;
        export { resourceName_22 as resourceName };
    }
    export namespace landlord_renewal_contracts {
        export namespace model_15 {
            export namespace rent {
                const type_75: string;
                export { type_75 as type };
                const nullable_75: boolean;
                export { nullable_75 as nullable };
                const write_75: boolean;
                export { write_75 as write };
                const read_75: boolean;
                export { read_75 as read };
                const id_87: string;
                export { id_87 as id };
                const label_80: string;
                export { label_80 as label };
            }
            export namespace depositAmount {
                const type_76: string;
                export { type_76 as type };
                const nullable_76: boolean;
                export { nullable_76 as nullable };
                const write_76: boolean;
                export { write_76 as write };
                const read_76: boolean;
                export { read_76 as read };
                const id_88: string;
                export { id_88 as id };
                const label_81: string;
                export { label_81 as label };
            }
            export namespace endDate_1 {
                const type_77: string;
                export { type_77 as type };
                const nullable_77: boolean;
                export { nullable_77 as nullable };
                const write_77: boolean;
                export { write_77 as write };
                const read_77: boolean;
                export { read_77 as read };
                const id_89: string;
                export { id_89 as id };
                const label_82: string;
                export { label_82 as label };
            }
            export { endDate_1 as endDate };
            export namespace unsignedFile_3 {
                const type_78: string;
                export { type_78 as type };
                const nullable_78: boolean;
                export { nullable_78 as nullable };
                const write_78: boolean;
                export { write_78 as write };
                const read_78: boolean;
                export { read_78 as read };
                const id_90: string;
                export { id_90 as id };
                const label_83: string;
                export { label_83 as label };
            }
            export { unsignedFile_3 as unsignedFile };
            export namespace issuerSignedFile_3 {
                const type_79: string;
                export { type_79 as type };
                const nullable_79: boolean;
                export { nullable_79 as nullable };
                const write_79: boolean;
                export { write_79 as write };
                const read_79: boolean;
                export { read_79 as read };
                const id_91: string;
                export { id_91 as id };
                const label_84: string;
                export { label_84 as label };
            }
            export { issuerSignedFile_3 as issuerSignedFile };
            export namespace beneficiarySignedFile_3 {
                const type_80: string;
                export { type_80 as type };
                const nullable_80: boolean;
                export { nullable_80 as nullable };
                const write_80: boolean;
                export { write_80 as write };
                const read_80: boolean;
                export { read_80 as read };
                const id_92: string;
                export { id_92 as id };
                const label_85: string;
                export { label_85 as label };
            }
            export { beneficiarySignedFile_3 as beneficiarySignedFile };
            export namespace startDate_2 {
                const type_81: string;
                export { type_81 as type };
                const nullable_81: boolean;
                export { nullable_81 as nullable };
                const write_81: boolean;
                export { write_81 as write };
                const read_81: boolean;
                export { read_81 as read };
                const id_93: string;
                export { id_93 as id };
                const label_86: string;
                export { label_86 as label };
            }
            export { startDate_2 as startDate };
            export namespace currentPlace_5 {
                const type_82: string;
                export { type_82 as type };
                const nullable_82: boolean;
                export { nullable_82 as nullable };
                const write_82: boolean;
                export { write_82 as write };
                const read_82: boolean;
                export { read_82 as read };
                const validators_25: string[];
                export { validators_25 as validators };
                const errorMessages_25: string[];
                export { errorMessages_25 as errorMessages };
                const id_94: string;
                export { id_94 as id };
                const label_87: string;
                export { label_87 as label };
            }
            export { currentPlace_5 as currentPlace };
            export namespace requestedTransition_5 {
                const type_83: string;
                export { type_83 as type };
                const nullable_83: boolean;
                export { nullable_83 as nullable };
                const write_83: boolean;
                export { write_83 as write };
                const read_83: boolean;
                export { read_83 as read };
                const id_95: string;
                export { id_95 as id };
                const label_88: string;
                export { label_88 as label };
            }
            export { requestedTransition_5 as requestedTransition };
            export namespace eligibleTransitions_5 {
                const id_96: string;
                export { id_96 as id };
                const label_89: string;
                export { label_89 as label };
            }
            export { eligibleTransitions_5 as eligibleTransitions };
        }
        export { model_15 as model };
        const title_15: string;
        export { title_15 as title };
        const resourceName_23: string;
        export { resourceName_23 as resourceName };
    }
    export namespace tenant_contracts {
        export namespace model_16 {
            export namespace witnessSignedFile_1 {
                const type_84: string;
                export { type_84 as type };
                const nullable_84: boolean;
                export { nullable_84 as nullable };
                const write_84: boolean;
                export { write_84 as write };
                const read_84: boolean;
                export { read_84 as read };
                const validators_26: string[];
                export { validators_26 as validators };
                const errorMessages_26: string[];
                export { errorMessages_26 as errorMessages };
                const id_97: string;
                export { id_97 as id };
                const label_90: string;
                export { label_90 as label };
            }
            export { witnessSignedFile_1 as witnessSignedFile };
            export namespace months_1 {
                const type_85: string;
                export { type_85 as type };
                const nullable_85: boolean;
                export { nullable_85 as nullable };
                const write_85: boolean;
                export { write_85 as write };
                const read_85: boolean;
                export { read_85 as read };
                const id_98: string;
                export { id_98 as id };
                const label_91: string;
                export { label_91 as label };
            }
            export { months_1 as months };
            export namespace fee_1 {
                const type_86: string;
                export { type_86 as type };
                const nullable_86: boolean;
                export { nullable_86 as nullable };
                const write_86: boolean;
                export { write_86 as write };
                const read_86: boolean;
                export { read_86 as read };
                const id_99: string;
                export { id_99 as id };
                const label_92: string;
                export { label_92 as label };
            }
            export { fee_1 as fee };
            export namespace deposit_1 {
                const targetClass_15: string;
                export { targetClass_15 as targetClass };
                const optionsName_7: string;
                export { optionsName_7 as optionsName };
                const type_87: string;
                export { type_87 as type };
                const nullable_87: boolean;
                export { nullable_87 as nullable };
                const write_87: boolean;
                export { write_87 as write };
                const read_87: boolean;
                export { read_87 as read };
                const options_7: {
                    id: number;
                    label: string;
                }[];
                export { options_7 as options };
                const validators_27: string[];
                export { validators_27 as validators };
                const errorMessages_27: string[];
                export { errorMessages_27 as errorMessages };
                const id_100: string;
                export { id_100 as id };
                const label_93: string;
                export { label_93 as label };
            }
            export { deposit_1 as deposit };
            export namespace payments_1 {
                const targetClass_16: string;
                export { targetClass_16 as targetClass };
                const type_88: string;
                export { type_88 as type };
                const nullable_88: boolean;
                export { nullable_88 as nullable };
                const write_88: boolean;
                export { write_88 as write };
                const read_88: boolean;
                export { read_88 as read };
                export namespace resource_8 {
                    const model_17: never[];
                    export { model_17 as model };
                    const title_16: string;
                    export { title_16 as title };
                    const resourceName_24: string;
                    export { resourceName_24 as resourceName };
                }
                export { resource_8 as resource };
                const resourceName_25: string;
                export { resourceName_25 as resourceName };
                const validators_28: string[];
                export { validators_28 as validators };
                const errorMessages_28: string[];
                export { errorMessages_28 as errorMessages };
                const id_101: string;
                export { id_101 as id };
                const label_94: string;
                export { label_94 as label };
            }
            export { payments_1 as payments };
            export namespace defaultPaymentDay_1 {
                const type_89: string;
                export { type_89 as type };
                const nullable_89: boolean;
                export { nullable_89 as nullable };
                const write_89: boolean;
                export { write_89 as write };
                const read_89: boolean;
                export { read_89 as read };
                const validators_29: string[];
                export { validators_29 as validators };
                const errorMessages_29: string[];
                export { errorMessages_29 as errorMessages };
                const id_102: string;
                export { id_102 as id };
                const label_95: string;
                export { label_95 as label };
            }
            export { defaultPaymentDay_1 as defaultPaymentDay };
            export namespace endDate_2 {
                const type_90: string;
                export { type_90 as type };
                const nullable_90: boolean;
                export { nullable_90 as nullable };
                const write_90: boolean;
                export { write_90 as write };
                const read_90: boolean;
                export { read_90 as read };
                const id_103: string;
                export { id_103 as id };
                const label_96: string;
                export { label_96 as label };
            }
            export { endDate_2 as endDate };
            export namespace unsignedFile_4 {
                const type_91: string;
                export { type_91 as type };
                const nullable_91: boolean;
                export { nullable_91 as nullable };
                const write_91: boolean;
                export { write_91 as write };
                const read_91: boolean;
                export { read_91 as read };
                const id_104: string;
                export { id_104 as id };
                const label_97: string;
                export { label_97 as label };
            }
            export { unsignedFile_4 as unsignedFile };
            export namespace issuerSignedFile_4 {
                const type_92: string;
                export { type_92 as type };
                const nullable_92: boolean;
                export { nullable_92 as nullable };
                const write_92: boolean;
                export { write_92 as write };
                const read_92: boolean;
                export { read_92 as read };
                const id_105: string;
                export { id_105 as id };
                const label_98: string;
                export { label_98 as label };
            }
            export { issuerSignedFile_4 as issuerSignedFile };
            export namespace beneficiarySignedFile_4 {
                const type_93: string;
                export { type_93 as type };
                const nullable_93: boolean;
                export { nullable_93 as nullable };
                const write_93: boolean;
                export { write_93 as write };
                const read_93: boolean;
                export { read_93 as read };
                const id_106: string;
                export { id_106 as id };
                const label_99: string;
                export { label_99 as label };
            }
            export { beneficiarySignedFile_4 as beneficiarySignedFile };
        }
        export { model_16 as model };
        const title_17: string;
        export { title_17 as title };
        const resourceName_26: string;
        export { resourceName_26 as resourceName };
    }
    export namespace events {
        export namespace model_18 {
            export namespace id_107 {
                const type_94: string;
                export { type_94 as type };
                const nullable_94: boolean;
                export { nullable_94 as nullable };
                const write_94: boolean;
                export { write_94 as write };
                const read_94: boolean;
                export { read_94 as read };
                const validators_30: string[];
                export { validators_30 as validators };
                const errorMessages_30: string[];
                export { errorMessages_30 as errorMessages };
                const id_108: string;
                export { id_108 as id };
                const label_100: string;
                export { label_100 as label };
            }
            export { id_107 as id };
            export namespace description {
                const type_95: string;
                export { type_95 as type };
                const nullable_95: boolean;
                export { nullable_95 as nullable };
                const write_95: boolean;
                export { write_95 as write };
                const read_95: boolean;
                export { read_95 as read };
                const validators_31: string[];
                export { validators_31 as validators };
                const errorMessages_31: string[];
                export { errorMessages_31 as errorMessages };
                const id_109: string;
                export { id_109 as id };
                const label_101: string;
                export { label_101 as label };
            }
            export namespace createdAt {
                const type_96: string;
                export { type_96 as type };
                const nullable_96: boolean;
                export { nullable_96 as nullable };
                const write_96: boolean;
                export { write_96 as write };
                const read_96: boolean;
                export { read_96 as read };
                const validators_32: string[];
                export { validators_32 as validators };
                const errorMessages_32: string[];
                export { errorMessages_32 as errorMessages };
                const id_110: string;
                export { id_110 as id };
                const label_102: string;
                export { label_102 as label };
            }
        }
        export { model_18 as model };
        const title_18: string;
        export { title_18 as title };
        const resourceName_27: string;
        export { resourceName_27 as resourceName };
    }
    export namespace landlords {
        export namespace model_19 {
            export namespace id_111 {
                const type_97: string;
                export { type_97 as type };
                const nullable_97: boolean;
                export { nullable_97 as nullable };
                const write_97: boolean;
                export { write_97 as write };
                const read_97: boolean;
                export { read_97 as read };
                const validators_33: string[];
                export { validators_33 as validators };
                const errorMessages_33: string[];
                export { errorMessages_33 as errorMessages };
                const id_112: string;
                export { id_112 as id };
                const label_103: string;
                export { label_103 as label };
            }
            export { id_111 as id };
            export namespace mainContact {
                const type_98: string;
                export { type_98 as type };
                const nullable_98: boolean;
                export { nullable_98 as nullable };
                const write_98: boolean;
                export { write_98 as write };
                const read_98: boolean;
                export { read_98 as read };
                const id_113: string;
                export { id_113 as id };
                const label_104: string;
                export { label_104 as label };
            }
            export namespace personalData {
                const targetClass_17: string;
                export { targetClass_17 as targetClass };
                const type_99: string;
                export { type_99 as type };
                const nullable_99: boolean;
                export { nullable_99 as nullable };
                const write_99: boolean;
                export { write_99 as write };
                const read_99: boolean;
                export { read_99 as read };
                export namespace resource_9 {
                    export namespace model_20 {
                        export namespace id_114 {
                            const type_100: string;
                            export { type_100 as type };
                            const nullable_100: boolean;
                            export { nullable_100 as nullable };
                            const write_100: boolean;
                            export { write_100 as write };
                            const read_100: boolean;
                            export { read_100 as read };
                            const validators_34: string[];
                            export { validators_34 as validators };
                            const errorMessages_34: string[];
                            export { errorMessages_34 as errorMessages };
                            const id_115: string;
                            export { id_115 as id };
                            const label_105: string;
                            export { label_105 as label };
                        }
                        export { id_114 as id };
                        export namespace name_2 {
                            const type_101: string;
                            export { type_101 as type };
                            const nullable_101: boolean;
                            export { nullable_101 as nullable };
                            const write_101: boolean;
                            export { write_101 as write };
                            const read_101: boolean;
                            export { read_101 as read };
                            const id_116: string;
                            export { id_116 as id };
                            const label_106: string;
                            export { label_106 as label };
                        }
                        export { name_2 as name };
                        export namespace surname_2 {
                            const type_102: string;
                            export { type_102 as type };
                            const nullable_102: boolean;
                            export { nullable_102 as nullable };
                            const write_102: boolean;
                            export { write_102 as write };
                            const read_102: boolean;
                            export { read_102 as read };
                            const id_117: string;
                            export { id_117 as id };
                            const label_107: string;
                            export { label_107 as label };
                        }
                        export { surname_2 as surname };
                        export namespace address1_2 {
                            const type_103: string;
                            export { type_103 as type };
                            const nullable_103: boolean;
                            export { nullable_103 as nullable };
                            const write_103: boolean;
                            export { write_103 as write };
                            const read_103: boolean;
                            export { read_103 as read };
                            const id_118: string;
                            export { id_118 as id };
                            const label_108: string;
                            export { label_108 as label };
                        }
                        export { address1_2 as address1 };
                        export namespace address2_2 {
                            const type_104: string;
                            export { type_104 as type };
                            const nullable_104: boolean;
                            export { nullable_104 as nullable };
                            const write_104: boolean;
                            export { write_104 as write };
                            const read_104: boolean;
                            export { read_104 as read };
                            const id_119: string;
                            export { id_119 as id };
                            const label_109: string;
                            export { label_109 as label };
                        }
                        export { address2_2 as address2 };
                        export namespace postcode_6 {
                            const targetClass_18: string;
                            export { targetClass_18 as targetClass };
                            const type_105: string;
                            export { type_105 as type };
                            const nullable_105: boolean;
                            export { nullable_105 as nullable };
                            const write_105: boolean;
                            export { write_105 as write };
                            const read_105: boolean;
                            export { read_105 as read };
                            export namespace resource_10 {
                                export namespace model_21 {
                                    export namespace id_120 {
                                        const type_106: string;
                                        export { type_106 as type };
                                        const nullable_106: boolean;
                                        export { nullable_106 as nullable };
                                        const write_106: boolean;
                                        export { write_106 as write };
                                        const read_106: boolean;
                                        export { read_106 as read };
                                        const validators_35: string[];
                                        export { validators_35 as validators };
                                        const errorMessages_35: string[];
                                        export { errorMessages_35 as errorMessages };
                                        const id_121: string;
                                        export { id_121 as id };
                                        const label_110: string;
                                        export { label_110 as label };
                                    }
                                    export { id_120 as id };
                                    export namespace postcode_7 {
                                        const type_107: string;
                                        export { type_107 as type };
                                        const nullable_107: boolean;
                                        export { nullable_107 as nullable };
                                        const write_107: boolean;
                                        export { write_107 as write };
                                        const read_107: boolean;
                                        export { read_107 as read };
                                        const validators_36: string[];
                                        export { validators_36 as validators };
                                        const errorMessages_36: string[];
                                        export { errorMessages_36 as errorMessages };
                                        const id_122: string;
                                        export { id_122 as id };
                                        const label_111: string;
                                        export { label_111 as label };
                                    }
                                    export { postcode_7 as postcode };
                                }
                                export { model_21 as model };
                                const title_19: string;
                                export { title_19 as title };
                                const resourceName_28: string;
                                export { resourceName_28 as resourceName };
                            }
                            export { resource_10 as resource };
                            const resourceName_29: string;
                            export { resourceName_29 as resourceName };
                            const optionText_6: string;
                            export { optionText_6 as optionText };
                            const id_123: string;
                            export { id_123 as id };
                            const label_112: string;
                            export { label_112 as label };
                        }
                        export { postcode_6 as postcode };
                        export namespace postcode2_2 {
                            const targetClass_19: string;
                            export { targetClass_19 as targetClass };
                            const type_108: string;
                            export { type_108 as type };
                            const nullable_108: boolean;
                            export { nullable_108 as nullable };
                            const write_108: boolean;
                            export { write_108 as write };
                            const read_108: boolean;
                            export { read_108 as read };
                            export namespace resource_11 {
                                export namespace model_22 {
                                    export namespace id_124 {
                                        const type_109: string;
                                        export { type_109 as type };
                                        const nullable_109: boolean;
                                        export { nullable_109 as nullable };
                                        const write_109: boolean;
                                        export { write_109 as write };
                                        const read_109: boolean;
                                        export { read_109 as read };
                                        const validators_37: string[];
                                        export { validators_37 as validators };
                                        const errorMessages_37: string[];
                                        export { errorMessages_37 as errorMessages };
                                        const id_125: string;
                                        export { id_125 as id };
                                        const label_113: string;
                                        export { label_113 as label };
                                    }
                                    export { id_124 as id };
                                    export namespace postcode_8 {
                                        const type_110: string;
                                        export { type_110 as type };
                                        const nullable_110: boolean;
                                        export { nullable_110 as nullable };
                                        const write_110: boolean;
                                        export { write_110 as write };
                                        const read_110: boolean;
                                        export { read_110 as read };
                                        const validators_38: string[];
                                        export { validators_38 as validators };
                                        const errorMessages_38: string[];
                                        export { errorMessages_38 as errorMessages };
                                        const id_126: string;
                                        export { id_126 as id };
                                        const label_114: string;
                                        export { label_114 as label };
                                    }
                                    export { postcode_8 as postcode };
                                }
                                export { model_22 as model };
                                const title_20: string;
                                export { title_20 as title };
                                const resourceName_30: string;
                                export { resourceName_30 as resourceName };
                            }
                            export { resource_11 as resource };
                            const resourceName_31: string;
                            export { resourceName_31 as resourceName };
                            const optionText_7: string;
                            export { optionText_7 as optionText };
                            const id_127: string;
                            export { id_127 as id };
                            const label_115: string;
                            export { label_115 as label };
                        }
                        export { postcode2_2 as postcode2 };
                        export namespace email_2 {
                            const type_111: string;
                            export { type_111 as type };
                            const nullable_111: boolean;
                            export { nullable_111 as nullable };
                            const write_111: boolean;
                            export { write_111 as write };
                            const read_111: boolean;
                            export { read_111 as read };
                            const id_128: string;
                            export { id_128 as id };
                            const label_116: string;
                            export { label_116 as label };
                        }
                        export { email_2 as email };
                        export namespace telephone_2 {
                            const type_112: string;
                            export { type_112 as type };
                            const nullable_112: boolean;
                            export { nullable_112 as nullable };
                            const write_112: boolean;
                            export { write_112 as write };
                            const read_112: boolean;
                            export { read_112 as read };
                            const id_129: string;
                            export { id_129 as id };
                            const label_117: string;
                            export { label_117 as label };
                        }
                        export { telephone_2 as telephone };
                        export namespace mobile_2 {
                            const type_113: string;
                            export { type_113 as type };
                            const nullable_113: boolean;
                            export { nullable_113 as nullable };
                            const write_113: boolean;
                            export { write_113 as write };
                            const read_113: boolean;
                            export { read_113 as read };
                            const id_130: string;
                            export { id_130 as id };
                            const label_118: string;
                            export { label_118 as label };
                        }
                        export { mobile_2 as mobile };
                        export namespace nino_2 {
                            const type_114: string;
                            export { type_114 as type };
                            const nullable_114: boolean;
                            export { nullable_114 as nullable };
                            const write_114: boolean;
                            export { write_114 as write };
                            const read_114: boolean;
                            export { read_114 as read };
                            const id_131: string;
                            export { id_131 as id };
                            const label_119: string;
                            export { label_119 as label };
                        }
                        export { nino_2 as nino };
                    }
                    export { model_20 as model };
                    const title_21: string;
                    export { title_21 as title };
                    const resourceName_32: string;
                    export { resourceName_32 as resourceName };
                }
                export { resource_9 as resource };
                const resourceName_33: string;
                export { resourceName_33 as resourceName };
                const validators_39: string[];
                export { validators_39 as validators };
                const errorMessages_39: string[];
                export { errorMessages_39 as errorMessages };
                const id_132: string;
                export { id_132 as id };
                const label_120: string;
                export { label_120 as label };
            }
            export namespace landlordRelationships {
                const targetClass_20: string;
                export { targetClass_20 as targetClass };
                const type_115: string;
                export { type_115 as type };
                const nullable_115: boolean;
                export { nullable_115 as nullable };
                const write_115: boolean;
                export { write_115 as write };
                const read_115: boolean;
                export { read_115 as read };
                export namespace resource_12 {
                    export namespace model_23 {
                        export namespace currentPlace_6 {
                            const targetClass_21: string;
                            export { targetClass_21 as targetClass };
                            const optionsName_8: string;
                            export { optionsName_8 as optionsName };
                            const type_116: string;
                            export { type_116 as type };
                            const nullable_116: boolean;
                            export { nullable_116 as nullable };
                            const write_116: boolean;
                            export { write_116 as write };
                            const read_116: boolean;
                            export { read_116 as read };
                            const options_8: {
                                id: string;
                                label: string;
                            }[];
                            export { options_8 as options };
                            const validators_40: string[];
                            export { validators_40 as validators };
                            const errorMessages_40: string[];
                            export { errorMessages_40 as errorMessages };
                            const id_133: string;
                            export { id_133 as id };
                            const label_121: string;
                            export { label_121 as label };
                        }
                        export { currentPlace_6 as currentPlace };
                        export namespace requestedTransition_6 {
                            const id_134: string;
                            export { id_134 as id };
                            const label_122: string;
                            export { label_122 as label };
                        }
                        export { requestedTransition_6 as requestedTransition };
                        export namespace eligibleTransitions_6 {
                            const id_135: string;
                            export { id_135 as id };
                            const label_123: string;
                            export { label_123 as label };
                        }
                        export { eligibleTransitions_6 as eligibleTransitions };
                    }
                    export { model_23 as model };
                    const title_22: string;
                    export { title_22 as title };
                    const resourceName_34: string;
                    export { resourceName_34 as resourceName };
                }
                export { resource_12 as resource };
                const resourceName_35: string;
                export { resourceName_35 as resourceName };
                const validators_41: string[];
                export { validators_41 as validators };
                const errorMessages_41: string[];
                export { errorMessages_41 as errorMessages };
                const id_136: string;
                export { id_136 as id };
                const label_124: string;
                export { label_124 as label };
            }
        }
        export { model_19 as model };
        const title_23: string;
        export { title_23 as title };
        const resourceName_36: string;
        export { resourceName_36 as resourceName };
    }
    export namespace landlord_relationships {
        export namespace filters {
            const text: string[];
            const enum_multiple: string[];
        }
        export namespace model_24 {
            export namespace id_137 {
                const type_117: string;
                export { type_117 as type };
                const nullable_117: boolean;
                export { nullable_117 as nullable };
                const write_117: boolean;
                export { write_117 as write };
                const read_117: boolean;
                export { read_117 as read };
                const validators_42: string[];
                export { validators_42 as validators };
                const errorMessages_42: string[];
                export { errorMessages_42 as errorMessages };
                const id_138: string;
                export { id_138 as id };
                const label_125: string;
                export { label_125 as label };
            }
            export { id_137 as id };
            export namespace code {
                const type_118: string;
                export { type_118 as type };
                const nullable_118: boolean;
                export { nullable_118 as nullable };
                const write_118: boolean;
                export { write_118 as write };
                const read_118: boolean;
                export { read_118 as read };
                const id_139: string;
                export { id_139 as id };
                const label_126: string;
                export { label_126 as label };
            }
            export namespace property {
                const targetClass_22: string;
                export { targetClass_22 as targetClass };
                const type_119: string;
                export { type_119 as type };
                const nullable_119: boolean;
                export { nullable_119 as nullable };
                const write_119: boolean;
                export { write_119 as write };
                const read_119: boolean;
                export { read_119 as read };
                export namespace resource_13 {
                    export namespace model_25 {
                        export namespace id_140 {
                            const type_120: string;
                            export { type_120 as type };
                            const nullable_120: boolean;
                            export { nullable_120 as nullable };
                            const write_120: boolean;
                            export { write_120 as write };
                            const read_120: boolean;
                            export { read_120 as read };
                            const validators_43: string[];
                            export { validators_43 as validators };
                            const errorMessages_43: string[];
                            export { errorMessages_43 as errorMessages };
                            const id_141: string;
                            export { id_141 as id };
                            const label_127: string;
                            export { label_127 as label };
                        }
                        export { id_140 as id };
                        export namespace type_121 {
                            const targetClass_23: string;
                            export { targetClass_23 as targetClass };
                            const type_122: string;
                            export { type_122 as type };
                            const nullable_121: boolean;
                            export { nullable_121 as nullable };
                            const write_121: boolean;
                            export { write_121 as write };
                            const read_121: boolean;
                            export { read_121 as read };
                            export namespace resource_14 {
                                const model_26: never[];
                                export { model_26 as model };
                                const title_24: string;
                                export { title_24 as title };
                                const resourceName_37: string;
                                export { resourceName_37 as resourceName };
                            }
                            export { resource_14 as resource };
                            const resourceName_38: string;
                            export { resourceName_38 as resourceName };
                            const optionText_8: string;
                            export { optionText_8 as optionText };
                            const validators_44: string[];
                            export { validators_44 as validators };
                            const errorMessages_44: string[];
                            export { errorMessages_44 as errorMessages };
                            const id_142: string;
                            export { id_142 as id };
                            const label_128: string;
                            export { label_128 as label };
                        }
                        export { type_121 as type };
                        export namespace propertyName {
                            const type_123: string;
                            export { type_123 as type };
                            const nullable_122: boolean;
                            export { nullable_122 as nullable };
                            const write_122: boolean;
                            export { write_122 as write };
                            const read_122: boolean;
                            export { read_122 as read };
                            const validators_45: string[];
                            export { validators_45 as validators };
                            const errorMessages_45: string[];
                            export { errorMessages_45 as errorMessages };
                            const id_143: string;
                            export { id_143 as id };
                            const label_129: string;
                            export { label_129 as label };
                        }
                        export namespace address {
                            const type_124: string;
                            export { type_124 as type };
                            const nullable_123: boolean;
                            export { nullable_123 as nullable };
                            const write_123: boolean;
                            export { write_123 as write };
                            const read_123: boolean;
                            export { read_123 as read };
                            const validators_46: string[];
                            export { validators_46 as validators };
                            const errorMessages_46: string[];
                            export { errorMessages_46 as errorMessages };
                            const id_144: string;
                            export { id_144 as id };
                            const label_130: string;
                            export { label_130 as label };
                        }
                        export namespace floorplans {
                            const type_125: string;
                            export { type_125 as type };
                            const nullable_124: boolean;
                            export { nullable_124 as nullable };
                            const write_124: boolean;
                            export { write_124 as write };
                            const read_124: boolean;
                            export { read_124 as read };
                            const validators_47: string[];
                            export { validators_47 as validators };
                            const errorMessages_47: string[];
                            export { errorMessages_47 as errorMessages };
                            const id_145: string;
                            export { id_145 as id };
                            const label_131: string;
                            export { label_131 as label };
                        }
                        export namespace country {
                            const targetClass_24: string;
                            export { targetClass_24 as targetClass };
                            const type_126: string;
                            export { type_126 as type };
                            const nullable_125: boolean;
                            export { nullable_125 as nullable };
                            const write_125: boolean;
                            export { write_125 as write };
                            const read_125: boolean;
                            export { read_125 as read };
                            export namespace resource_15 {
                                const model_27: never[];
                                export { model_27 as model };
                                const title_25: string;
                                export { title_25 as title };
                                const resourceName_39: string;
                                export { resourceName_39 as resourceName };
                            }
                            export { resource_15 as resource };
                            const resourceName_40: string;
                            export { resourceName_40 as resourceName };
                            const optionText_9: string;
                            export { optionText_9 as optionText };
                            const validators_48: string[];
                            export { validators_48 as validators };
                            const errorMessages_48: string[];
                            export { errorMessages_48 as errorMessages };
                            const id_146: string;
                            export { id_146 as id };
                            const label_132: string;
                            export { label_132 as label };
                        }
                        export namespace city {
                            const targetClass_25: string;
                            export { targetClass_25 as targetClass };
                            const type_127: string;
                            export { type_127 as type };
                            const nullable_126: boolean;
                            export { nullable_126 as nullable };
                            const write_126: boolean;
                            export { write_126 as write };
                            const read_126: boolean;
                            export { read_126 as read };
                            export namespace resource_16 {
                                const model_28: never[];
                                export { model_28 as model };
                                const title_26: string;
                                export { title_26 as title };
                                const resourceName_41: string;
                                export { resourceName_41 as resourceName };
                            }
                            export { resource_16 as resource };
                            const resourceName_42: string;
                            export { resourceName_42 as resourceName };
                            const optionText_10: string;
                            export { optionText_10 as optionText };
                            const validators_49: string[];
                            export { validators_49 as validators };
                            const errorMessages_49: string[];
                            export { errorMessages_49 as errorMessages };
                            const id_147: string;
                            export { id_147 as id };
                            const label_133: string;
                            export { label_133 as label };
                        }
                        export namespace county {
                            const targetClass_26: string;
                            export { targetClass_26 as targetClass };
                            const type_128: string;
                            export { type_128 as type };
                            const nullable_127: boolean;
                            export { nullable_127 as nullable };
                            const write_127: boolean;
                            export { write_127 as write };
                            const read_127: boolean;
                            export { read_127 as read };
                            export namespace resource_17 {
                                const model_29: never[];
                                export { model_29 as model };
                                const title_27: string;
                                export { title_27 as title };
                                const resourceName_43: string;
                                export { resourceName_43 as resourceName };
                            }
                            export { resource_17 as resource };
                            const resourceName_44: string;
                            export { resourceName_44 as resourceName };
                            const optionText_11: string;
                            export { optionText_11 as optionText };
                            const validators_50: string[];
                            export { validators_50 as validators };
                            const errorMessages_50: string[];
                            export { errorMessages_50 as errorMessages };
                            const id_148: string;
                            export { id_148 as id };
                            const label_134: string;
                            export { label_134 as label };
                        }
                        export namespace area {
                            const targetClass_27: string;
                            export { targetClass_27 as targetClass };
                            const type_129: string;
                            export { type_129 as type };
                            const nullable_128: boolean;
                            export { nullable_128 as nullable };
                            const write_128: boolean;
                            export { write_128 as write };
                            const read_128: boolean;
                            export { read_128 as read };
                            export namespace resource_18 {
                                const model_30: never[];
                                export { model_30 as model };
                                const title_28: string;
                                export { title_28 as title };
                                const resourceName_45: string;
                                export { resourceName_45 as resourceName };
                            }
                            export { resource_18 as resource };
                            const resourceName_46: string;
                            export { resourceName_46 as resourceName };
                            const optionText_12: string;
                            export { optionText_12 as optionText };
                            const validators_51: string[];
                            export { validators_51 as validators };
                            const errorMessages_51: string[];
                            export { errorMessages_51 as errorMessages };
                            const id_149: string;
                            export { id_149 as id };
                            const label_135: string;
                            export { label_135 as label };
                        }
                        export namespace neighborhood {
                            const targetClass_28: string;
                            export { targetClass_28 as targetClass };
                            const type_130: string;
                            export { type_130 as type };
                            const nullable_129: boolean;
                            export { nullable_129 as nullable };
                            const write_129: boolean;
                            export { write_129 as write };
                            const read_129: boolean;
                            export { read_129 as read };
                            export namespace resource_19 {
                                const model_31: never[];
                                export { model_31 as model };
                                const title_29: string;
                                export { title_29 as title };
                                const resourceName_47: string;
                                export { resourceName_47 as resourceName };
                            }
                            export { resource_19 as resource };
                            const resourceName_48: string;
                            export { resourceName_48 as resourceName };
                            const optionText_13: string;
                            export { optionText_13 as optionText };
                            const validators_52: string[];
                            export { validators_52 as validators };
                            const errorMessages_52: string[];
                            export { errorMessages_52 as errorMessages };
                            const id_150: string;
                            export { id_150 as id };
                            const label_136: string;
                            export { label_136 as label };
                        }
                        export namespace postcode_9 {
                            const targetClass_29: string;
                            export { targetClass_29 as targetClass };
                            const type_131: string;
                            export { type_131 as type };
                            const nullable_130: boolean;
                            export { nullable_130 as nullable };
                            const write_130: boolean;
                            export { write_130 as write };
                            const read_130: boolean;
                            export { read_130 as read };
                            export namespace resource_20 {
                                const model_32: never[];
                                export { model_32 as model };
                                const title_30: string;
                                export { title_30 as title };
                                const resourceName_49: string;
                                export { resourceName_49 as resourceName };
                            }
                            export { resource_20 as resource };
                            const resourceName_50: string;
                            export { resourceName_50 as resourceName };
                            const optionText_14: string;
                            export { optionText_14 as optionText };
                            const validators_53: string[];
                            export { validators_53 as validators };
                            const errorMessages_53: string[];
                            export { errorMessages_53 as errorMessages };
                            const id_151: string;
                            export { id_151 as id };
                            const label_137: string;
                            export { label_137 as label };
                        }
                        export { postcode_9 as postcode };
                        export namespace images {
                            const type_132: string;
                            export { type_132 as type };
                            const nullable_131: boolean;
                            export { nullable_131 as nullable };
                            const write_131: boolean;
                            export { write_131 as write };
                            const read_131: boolean;
                            export { read_131 as read };
                            const validators_54: string[];
                            export { validators_54 as validators };
                            const errorMessages_54: string[];
                            export { errorMessages_54 as errorMessages };
                            const id_152: string;
                            export { id_152 as id };
                            const label_138: string;
                            export { label_138 as label };
                        }
                        export namespace units {
                            const targetClass_30: string;
                            export { targetClass_30 as targetClass };
                            const type_133: string;
                            export { type_133 as type };
                            const nullable_132: boolean;
                            export { nullable_132 as nullable };
                            const write_132: boolean;
                            export { write_132 as write };
                            const read_132: boolean;
                            export { read_132 as read };
                            export namespace resource_21 {
                                export namespace model_33 {
                                    export namespace id_153 {
                                        const type_134: string;
                                        export { type_134 as type };
                                        const nullable_133: boolean;
                                        export { nullable_133 as nullable };
                                        const write_133: boolean;
                                        export { write_133 as write };
                                        const read_133: boolean;
                                        export { read_133 as read };
                                        const validators_55: string[];
                                        export { validators_55 as validators };
                                        const errorMessages_55: string[];
                                        export { errorMessages_55 as errorMessages };
                                        const id_154: string;
                                        export { id_154 as id };
                                        const label_139: string;
                                        export { label_139 as label };
                                    }
                                    export { id_153 as id };
                                    export namespace unitLetter {
                                        const type_135: string;
                                        export { type_135 as type };
                                        const nullable_134: boolean;
                                        export { nullable_134 as nullable };
                                        const write_134: boolean;
                                        export { write_134 as write };
                                        const read_134: boolean;
                                        export { read_134 as read };
                                        const validators_56: string[];
                                        export { validators_56 as validators };
                                        const errorMessages_56: string[];
                                        export { errorMessages_56 as errorMessages };
                                        const id_155: string;
                                        export { id_155 as id };
                                        const label_140: string;
                                        export { label_140 as label };
                                    }
                                    export namespace type_136 {
                                        const targetClass_31: string;
                                        export { targetClass_31 as targetClass };
                                        const type_137: string;
                                        export { type_137 as type };
                                        const nullable_135: boolean;
                                        export { nullable_135 as nullable };
                                        const write_135: boolean;
                                        export { write_135 as write };
                                        const read_135: boolean;
                                        export { read_135 as read };
                                        export namespace resource_22 {
                                            const model_34: never[];
                                            export { model_34 as model };
                                            const title_31: string;
                                            export { title_31 as title };
                                            const resourceName_51: string;
                                            export { resourceName_51 as resourceName };
                                        }
                                        export { resource_22 as resource };
                                        const resourceName_52: string;
                                        export { resourceName_52 as resourceName };
                                        const optionText_15: string;
                                        export { optionText_15 as optionText };
                                        const validators_57: string[];
                                        export { validators_57 as validators };
                                        const errorMessages_57: string[];
                                        export { errorMessages_57 as errorMessages };
                                        const id_156: string;
                                        export { id_156 as id };
                                        const label_141: string;
                                        export { label_141 as label };
                                    }
                                    export { type_136 as type };
                                    export namespace weeklyPrice {
                                        const type_138: string;
                                        export { type_138 as type };
                                        const nullable_136: boolean;
                                        export { nullable_136 as nullable };
                                        const write_136: boolean;
                                        export { write_136 as write };
                                        const read_136: boolean;
                                        export { read_136 as read };
                                        const validators_58: string[];
                                        export { validators_58 as validators };
                                        const errorMessages_58: string[];
                                        export { errorMessages_58 as errorMessages };
                                        const id_157: string;
                                        export { id_157 as id };
                                        const label_142: string;
                                        export { label_142 as label };
                                    }
                                    export namespace images_1 {
                                        const type_139: string;
                                        export { type_139 as type };
                                        const nullable_137: boolean;
                                        export { nullable_137 as nullable };
                                        const write_137: boolean;
                                        export { write_137 as write };
                                        const read_137: boolean;
                                        export { read_137 as read };
                                        const validators_59: string[];
                                        export { validators_59 as validators };
                                        const errorMessages_59: string[];
                                        export { errorMessages_59 as errorMessages };
                                        const id_158: string;
                                        export { id_158 as id };
                                        const label_143: string;
                                        export { label_143 as label };
                                    }
                                    export { images_1 as images };
                                    export namespace currentPlace_7 {
                                        const targetClass_32: string;
                                        export { targetClass_32 as targetClass };
                                        const optionsName_9: string;
                                        export { optionsName_9 as optionsName };
                                        const type_140: string;
                                        export { type_140 as type };
                                        const nullable_138: boolean;
                                        export { nullable_138 as nullable };
                                        const write_138: boolean;
                                        export { write_138 as write };
                                        const read_138: boolean;
                                        export { read_138 as read };
                                        const options_9: {
                                            id: string;
                                            label: string;
                                        }[];
                                        export { options_9 as options };
                                        const validators_60: string[];
                                        export { validators_60 as validators };
                                        const errorMessages_60: string[];
                                        export { errorMessages_60 as errorMessages };
                                        const id_159: string;
                                        export { id_159 as id };
                                        const label_144: string;
                                        export { label_144 as label };
                                    }
                                    export { currentPlace_7 as currentPlace };
                                    export namespace requestedTransition_7 {
                                        const type_141: string;
                                        export { type_141 as type };
                                        const nullable_139: boolean;
                                        export { nullable_139 as nullable };
                                        const write_139: boolean;
                                        export { write_139 as write };
                                        const read_139: boolean;
                                        export { read_139 as read };
                                        const id_160: string;
                                        export { id_160 as id };
                                        const label_145: string;
                                        export { label_145 as label };
                                    }
                                    export { requestedTransition_7 as requestedTransition };
                                    export namespace eligibleTransitions_7 {
                                        const id_161: string;
                                        export { id_161 as id };
                                        const label_146: string;
                                        export { label_146 as label };
                                    }
                                    export { eligibleTransitions_7 as eligibleTransitions };
                                }
                                export { model_33 as model };
                                const title_32: string;
                                export { title_32 as title };
                                const resourceName_53: string;
                                export { resourceName_53 as resourceName };
                            }
                            export { resource_21 as resource };
                            const resourceName_54: string;
                            export { resourceName_54 as resourceName };
                            const validators_61: string[];
                            export { validators_61 as validators };
                            const errorMessages_61: string[];
                            export { errorMessages_61 as errorMessages };
                            const id_162: string;
                            export { id_162 as id };
                            const label_147: string;
                            export { label_147 as label };
                        }
                        export namespace askedMonthlyPrice {
                            const type_142: string;
                            export { type_142 as type };
                            const nullable_140: boolean;
                            export { nullable_140 as nullable };
                            const write_140: boolean;
                            export { write_140 as write };
                            const read_140: boolean;
                            export { read_140 as read };
                            const validators_62: string[];
                            export { validators_62 as validators };
                            const errorMessages_62: string[];
                            export { errorMessages_62 as errorMessages };
                            const id_163: string;
                            export { id_163 as id };
                            const label_148: string;
                            export { label_148 as label };
                        }
                        export namespace currentPlace_8 {
                            const targetClass_33: string;
                            export { targetClass_33 as targetClass };
                            const optionsName_10: string;
                            export { optionsName_10 as optionsName };
                            const type_143: string;
                            export { type_143 as type };
                            const nullable_141: boolean;
                            export { nullable_141 as nullable };
                            const write_141: boolean;
                            export { write_141 as write };
                            const read_141: boolean;
                            export { read_141 as read };
                            const options_10: {
                                id: string;
                                label: string;
                            }[];
                            export { options_10 as options };
                            const validators_63: string[];
                            export { validators_63 as validators };
                            const errorMessages_63: string[];
                            export { errorMessages_63 as errorMessages };
                            const id_164: string;
                            export { id_164 as id };
                            const label_149: string;
                            export { label_149 as label };
                        }
                        export { currentPlace_8 as currentPlace };
                        export namespace requestedTransition_8 {
                            const type_144: string;
                            export { type_144 as type };
                            const nullable_142: boolean;
                            export { nullable_142 as nullable };
                            const write_142: boolean;
                            export { write_142 as write };
                            const read_142: boolean;
                            export { read_142 as read };
                            const id_165: string;
                            export { id_165 as id };
                            const label_150: string;
                            export { label_150 as label };
                        }
                        export { requestedTransition_8 as requestedTransition };
                        export namespace eligibleTransitions_8 {
                            const id_166: string;
                            export { id_166 as id };
                            const label_151: string;
                            export { label_151 as label };
                        }
                        export { eligibleTransitions_8 as eligibleTransitions };
                    }
                    export { model_25 as model };
                    const title_33: string;
                    export { title_33 as title };
                    const resourceName_55: string;
                    export { resourceName_55 as resourceName };
                }
                export { resource_13 as resource };
                const resourceName_56: string;
                export { resourceName_56 as resourceName };
                const optionText_16: string;
                export { optionText_16 as optionText };
                const id_167: string;
                export { id_167 as id };
                const label_152: string;
                export { label_152 as label };
            }
            export namespace landlord {
                const targetClass_34: string;
                export { targetClass_34 as targetClass };
                const type_145: string;
                export { type_145 as type };
                const nullable_143: boolean;
                export { nullable_143 as nullable };
                const write_143: boolean;
                export { write_143 as write };
                const read_143: boolean;
                export { read_143 as read };
                export namespace resource_23 {
                    export namespace model_35 {
                        export namespace id_168 {
                            const type_146: string;
                            export { type_146 as type };
                            const nullable_144: boolean;
                            export { nullable_144 as nullable };
                            const write_144: boolean;
                            export { write_144 as write };
                            const read_144: boolean;
                            export { read_144 as read };
                            const validators_64: string[];
                            export { validators_64 as validators };
                            const errorMessages_64: string[];
                            export { errorMessages_64 as errorMessages };
                            const id_169: string;
                            export { id_169 as id };
                            const label_153: string;
                            export { label_153 as label };
                        }
                        export { id_168 as id };
                        export namespace mainContact_1 {
                            const type_147: string;
                            export { type_147 as type };
                            const nullable_145: boolean;
                            export { nullable_145 as nullable };
                            const write_145: boolean;
                            export { write_145 as write };
                            const read_145: boolean;
                            export { read_145 as read };
                            const id_170: string;
                            export { id_170 as id };
                            const label_154: string;
                            export { label_154 as label };
                        }
                        export { mainContact_1 as mainContact };
                        export namespace personalData_1 {
                            const targetClass_35: string;
                            export { targetClass_35 as targetClass };
                            const type_148: string;
                            export { type_148 as type };
                            const nullable_146: boolean;
                            export { nullable_146 as nullable };
                            const write_146: boolean;
                            export { write_146 as write };
                            const read_146: boolean;
                            export { read_146 as read };
                            export namespace resource_24 {
                                export namespace model_36 {
                                    export namespace id_171 {
                                        const type_149: string;
                                        export { type_149 as type };
                                        const nullable_147: boolean;
                                        export { nullable_147 as nullable };
                                        const write_147: boolean;
                                        export { write_147 as write };
                                        const read_147: boolean;
                                        export { read_147 as read };
                                        const validators_65: string[];
                                        export { validators_65 as validators };
                                        const errorMessages_65: string[];
                                        export { errorMessages_65 as errorMessages };
                                        const id_172: string;
                                        export { id_172 as id };
                                        const label_155: string;
                                        export { label_155 as label };
                                    }
                                    export { id_171 as id };
                                    export namespace name_3 {
                                        const type_150: string;
                                        export { type_150 as type };
                                        const nullable_148: boolean;
                                        export { nullable_148 as nullable };
                                        const write_148: boolean;
                                        export { write_148 as write };
                                        const read_148: boolean;
                                        export { read_148 as read };
                                        const id_173: string;
                                        export { id_173 as id };
                                        const label_156: string;
                                        export { label_156 as label };
                                    }
                                    export { name_3 as name };
                                    export namespace surname_3 {
                                        const type_151: string;
                                        export { type_151 as type };
                                        const nullable_149: boolean;
                                        export { nullable_149 as nullable };
                                        const write_149: boolean;
                                        export { write_149 as write };
                                        const read_149: boolean;
                                        export { read_149 as read };
                                        const id_174: string;
                                        export { id_174 as id };
                                        const label_157: string;
                                        export { label_157 as label };
                                    }
                                    export { surname_3 as surname };
                                    export namespace address1_3 {
                                        const type_152: string;
                                        export { type_152 as type };
                                        const nullable_150: boolean;
                                        export { nullable_150 as nullable };
                                        const write_150: boolean;
                                        export { write_150 as write };
                                        const read_150: boolean;
                                        export { read_150 as read };
                                        const id_175: string;
                                        export { id_175 as id };
                                        const label_158: string;
                                        export { label_158 as label };
                                    }
                                    export { address1_3 as address1 };
                                    export namespace postcode_10 {
                                        const targetClass_36: string;
                                        export { targetClass_36 as targetClass };
                                        const type_153: string;
                                        export { type_153 as type };
                                        const nullable_151: boolean;
                                        export { nullable_151 as nullable };
                                        const write_151: boolean;
                                        export { write_151 as write };
                                        const read_151: boolean;
                                        export { read_151 as read };
                                        export namespace resource_25 {
                                            const model_37: never[];
                                            export { model_37 as model };
                                            const title_34: string;
                                            export { title_34 as title };
                                            const resourceName_57: string;
                                            export { resourceName_57 as resourceName };
                                        }
                                        export { resource_25 as resource };
                                        const resourceName_58: string;
                                        export { resourceName_58 as resourceName };
                                        const optionText_17: string;
                                        export { optionText_17 as optionText };
                                        const id_176: string;
                                        export { id_176 as id };
                                        const label_159: string;
                                        export { label_159 as label };
                                    }
                                    export { postcode_10 as postcode };
                                    export namespace postcode2_3 {
                                        const targetClass_37: string;
                                        export { targetClass_37 as targetClass };
                                        const type_154: string;
                                        export { type_154 as type };
                                        const nullable_152: boolean;
                                        export { nullable_152 as nullable };
                                        const write_152: boolean;
                                        export { write_152 as write };
                                        const read_152: boolean;
                                        export { read_152 as read };
                                        export namespace resource_26 {
                                            const model_38: never[];
                                            export { model_38 as model };
                                            const title_35: string;
                                            export { title_35 as title };
                                            const resourceName_59: string;
                                            export { resourceName_59 as resourceName };
                                        }
                                        export { resource_26 as resource };
                                        const resourceName_60: string;
                                        export { resourceName_60 as resourceName };
                                        const optionText_18: string;
                                        export { optionText_18 as optionText };
                                        const id_177: string;
                                        export { id_177 as id };
                                        const label_160: string;
                                        export { label_160 as label };
                                    }
                                    export { postcode2_3 as postcode2 };
                                    export namespace email_3 {
                                        const type_155: string;
                                        export { type_155 as type };
                                        const nullable_153: boolean;
                                        export { nullable_153 as nullable };
                                        const write_153: boolean;
                                        export { write_153 as write };
                                        const read_153: boolean;
                                        export { read_153 as read };
                                        const id_178: string;
                                        export { id_178 as id };
                                        const label_161: string;
                                        export { label_161 as label };
                                    }
                                    export { email_3 as email };
                                    export namespace telephone_3 {
                                        const type_156: string;
                                        export { type_156 as type };
                                        const nullable_154: boolean;
                                        export { nullable_154 as nullable };
                                        const write_154: boolean;
                                        export { write_154 as write };
                                        const read_154: boolean;
                                        export { read_154 as read };
                                        const id_179: string;
                                        export { id_179 as id };
                                        const label_162: string;
                                        export { label_162 as label };
                                    }
                                    export { telephone_3 as telephone };
                                    export namespace mobile_3 {
                                        const type_157: string;
                                        export { type_157 as type };
                                        const nullable_155: boolean;
                                        export { nullable_155 as nullable };
                                        const write_155: boolean;
                                        export { write_155 as write };
                                        const read_155: boolean;
                                        export { read_155 as read };
                                        const id_180: string;
                                        export { id_180 as id };
                                        const label_163: string;
                                        export { label_163 as label };
                                    }
                                    export { mobile_3 as mobile };
                                    export namespace nino_3 {
                                        const type_158: string;
                                        export { type_158 as type };
                                        const nullable_156: boolean;
                                        export { nullable_156 as nullable };
                                        const write_156: boolean;
                                        export { write_156 as write };
                                        const read_156: boolean;
                                        export { read_156 as read };
                                        const id_181: string;
                                        export { id_181 as id };
                                        const label_164: string;
                                        export { label_164 as label };
                                    }
                                    export { nino_3 as nino };
                                }
                                export { model_36 as model };
                                const title_36: string;
                                export { title_36 as title };
                                const resourceName_61: string;
                                export { resourceName_61 as resourceName };
                            }
                            export { resource_24 as resource };
                            const resourceName_62: string;
                            export { resourceName_62 as resourceName };
                            const validators_66: string[];
                            export { validators_66 as validators };
                            const errorMessages_66: string[];
                            export { errorMessages_66 as errorMessages };
                            const id_182: string;
                            export { id_182 as id };
                            const label_165: string;
                            export { label_165 as label };
                        }
                        export { personalData_1 as personalData };
                    }
                    export { model_35 as model };
                    const title_37: string;
                    export { title_37 as title };
                    const resourceName_63: string;
                    export { resourceName_63 as resourceName };
                }
                export { resource_23 as resource };
                const resourceName_64: string;
                export { resourceName_64 as resourceName };
                const optionText_19: string;
                export { optionText_19 as optionText };
                const id_183: string;
                export { id_183 as id };
                const label_166: string;
                export { label_166 as label };
            }
            export namespace firstLandlordTenancy {
                const targetClass_38: string;
                export { targetClass_38 as targetClass };
                const type_159: string;
                export { type_159 as type };
                const nullable_157: boolean;
                export { nullable_157 as nullable };
                const write_157: boolean;
                export { write_157 as write };
                const read_157: boolean;
                export { read_157 as read };
                export namespace resource_27 {
                    export namespace model_39 {
                        export namespace holdingDepositContract {
                            const targetClass_39: string;
                            export { targetClass_39 as targetClass };
                            const type_160: string;
                            export { type_160 as type };
                            const nullable_158: boolean;
                            export { nullable_158 as nullable };
                            const write_158: boolean;
                            export { write_158 as write };
                            const read_158: boolean;
                            export { read_158 as read };
                            export namespace resource_28 {
                                export namespace model_40 {
                                    export namespace holdingDeposit {
                                        const targetClass_40: string;
                                        export { targetClass_40 as targetClass };
                                        const optionsName_11: string;
                                        export { optionsName_11 as optionsName };
                                        const type_161: string;
                                        export { type_161 as type };
                                        const nullable_159: boolean;
                                        export { nullable_159 as nullable };
                                        const write_159: boolean;
                                        export { write_159 as write };
                                        const read_159: boolean;
                                        export { read_159 as read };
                                        const options_11: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_11 as options };
                                        const validators_67: string[];
                                        export { validators_67 as validators };
                                        const errorMessages_67: string[];
                                        export { errorMessages_67 as errorMessages };
                                        const id_184: string;
                                        export { id_184 as id };
                                        const label_167: string;
                                        export { label_167 as label };
                                    }
                                    export namespace securityDeposit {
                                        const targetClass_41: string;
                                        export { targetClass_41 as targetClass };
                                        const optionsName_12: string;
                                        export { optionsName_12 as optionsName };
                                        const type_162: string;
                                        export { type_162 as type };
                                        const nullable_160: boolean;
                                        export { nullable_160 as nullable };
                                        const write_160: boolean;
                                        export { write_160 as write };
                                        const read_160: boolean;
                                        export { read_160 as read };
                                        const options_12: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_12 as options };
                                        const validators_68: string[];
                                        export { validators_68 as validators };
                                        const errorMessages_68: string[];
                                        export { errorMessages_68 as errorMessages };
                                        const id_185: string;
                                        export { id_185 as id };
                                        const label_168: string;
                                        export { label_168 as label };
                                    }
                                    export namespace deadline {
                                        const type_163: string;
                                        export { type_163 as type };
                                        const nullable_161: boolean;
                                        export { nullable_161 as nullable };
                                        const write_161: boolean;
                                        export { write_161 as write };
                                        const read_161: boolean;
                                        export { read_161 as read };
                                        const id_186: string;
                                        export { id_186 as id };
                                        const label_169: string;
                                        export { label_169 as label };
                                    }
                                    export namespace hasBreakClause {
                                        const type_164: string;
                                        export { type_164 as type };
                                        const nullable_162: boolean;
                                        export { nullable_162 as nullable };
                                        const write_162: boolean;
                                        export { write_162 as write };
                                        const read_162: boolean;
                                        export { read_162 as read };
                                        const id_187: string;
                                        export { id_187 as id };
                                        const label_170: string;
                                        export { label_170 as label };
                                    }
                                    export namespace party {
                                        const targetClass_42: string;
                                        export { targetClass_42 as targetClass };
                                        const optionsName_13: string;
                                        export { optionsName_13 as optionsName };
                                        const type_165: string;
                                        export { type_165 as type };
                                        const nullable_163: boolean;
                                        export { nullable_163 as nullable };
                                        const write_163: boolean;
                                        export { write_163 as write };
                                        const read_163: boolean;
                                        export { read_163 as read };
                                        const options_13: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_13 as options };
                                        const validators_69: string[];
                                        export { validators_69 as validators };
                                        const errorMessages_69: string[];
                                        export { errorMessages_69 as errorMessages };
                                        const id_188: string;
                                        export { id_188 as id };
                                        const label_171: string;
                                        export { label_171 as label };
                                    }
                                    export namespace breakExercisable {
                                        const type_166: string;
                                        export { type_166 as type };
                                        const nullable_164: boolean;
                                        export { nullable_164 as nullable };
                                        const write_164: boolean;
                                        export { write_164 as write };
                                        const read_164: boolean;
                                        export { read_164 as read };
                                        const id_189: string;
                                        export { id_189 as id };
                                        const label_172: string;
                                        export { label_172 as label };
                                    }
                                    export namespace breakNoticePeriod {
                                        const type_167: string;
                                        export { type_167 as type };
                                        const nullable_165: boolean;
                                        export { nullable_165 as nullable };
                                        const write_165: boolean;
                                        export { write_165 as write };
                                        const read_165: boolean;
                                        export { read_165 as read };
                                        const id_190: string;
                                        export { id_190 as id };
                                        const label_173: string;
                                        export { label_173 as label };
                                    }
                                    export namespace rentFrequency {
                                        const targetClass_43: string;
                                        export { targetClass_43 as targetClass };
                                        const optionsName_14: string;
                                        export { optionsName_14 as optionsName };
                                        const type_168: string;
                                        export { type_168 as type };
                                        const nullable_166: boolean;
                                        export { nullable_166 as nullable };
                                        const write_166: boolean;
                                        export { write_166 as write };
                                        const read_166: boolean;
                                        export { read_166 as read };
                                        const options_14: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_14 as options };
                                        const validators_70: string[];
                                        export { validators_70 as validators };
                                        const errorMessages_70: string[];
                                        export { errorMessages_70 as errorMessages };
                                        const id_191: string;
                                        export { id_191 as id };
                                        const label_174: string;
                                        export { label_174 as label };
                                    }
                                    export namespace rentFrequencyModality {
                                        const targetClass_44: string;
                                        export { targetClass_44 as targetClass };
                                        const optionsName_15: string;
                                        export { optionsName_15 as optionsName };
                                        const type_169: string;
                                        export { type_169 as type };
                                        const nullable_167: boolean;
                                        export { nullable_167 as nullable };
                                        const write_167: boolean;
                                        export { write_167 as write };
                                        const read_167: boolean;
                                        export { read_167 as read };
                                        const options_15: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_15 as options };
                                        const validators_71: string[];
                                        export { validators_71 as validators };
                                        const errorMessages_71: string[];
                                        export { errorMessages_71 as errorMessages };
                                        const id_192: string;
                                        export { id_192 as id };
                                        const label_175: string;
                                        export { label_175 as label };
                                    }
                                    export namespace rentPaymentMethod {
                                        const targetClass_45: string;
                                        export { targetClass_45 as targetClass };
                                        const optionsName_16: string;
                                        export { optionsName_16 as optionsName };
                                        const type_170: string;
                                        export { type_170 as type };
                                        const nullable_168: boolean;
                                        export { nullable_168 as nullable };
                                        const write_168: boolean;
                                        export { write_168 as write };
                                        const read_168: boolean;
                                        export { read_168 as read };
                                        const options_16: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_16 as options };
                                        const validators_72: string[];
                                        export { validators_72 as validators };
                                        const errorMessages_72: string[];
                                        export { errorMessages_72 as errorMessages };
                                        const id_193: string;
                                        export { id_193 as id };
                                        const label_176: string;
                                        export { label_176 as label };
                                    }
                                    export namespace isDepositRequired {
                                        const type_171: string;
                                        export { type_171 as type };
                                        const nullable_169: boolean;
                                        export { nullable_169 as nullable };
                                        const write_169: boolean;
                                        export { write_169 as write };
                                        const read_169: boolean;
                                        export { read_169 as read };
                                        const validators_73: string[];
                                        export { validators_73 as validators };
                                        const errorMessages_73: string[];
                                        export { errorMessages_73 as errorMessages };
                                        const id_194: string;
                                        export { id_194 as id };
                                        const label_177: string;
                                        export { label_177 as label };
                                    }
                                    export namespace guarantorName {
                                        const type_172: string;
                                        export { type_172 as type };
                                        const nullable_170: boolean;
                                        export { nullable_170 as nullable };
                                        const write_170: boolean;
                                        export { write_170 as write };
                                        const read_170: boolean;
                                        export { read_170 as read };
                                        const id_195: string;
                                        export { id_195 as id };
                                        const label_178: string;
                                        export { label_178 as label };
                                    }
                                    export namespace currentPlace_9 {
                                        const targetClass_46: string;
                                        export { targetClass_46 as targetClass };
                                        const optionsName_17: string;
                                        export { optionsName_17 as optionsName };
                                        const type_173: string;
                                        export { type_173 as type };
                                        const nullable_171: boolean;
                                        export { nullable_171 as nullable };
                                        const write_171: boolean;
                                        export { write_171 as write };
                                        const read_171: boolean;
                                        export { read_171 as read };
                                        const options_17: {
                                            id: string;
                                            label: string;
                                        }[];
                                        export { options_17 as options };
                                        const validators_74: string[];
                                        export { validators_74 as validators };
                                        const errorMessages_74: string[];
                                        export { errorMessages_74 as errorMessages };
                                        const id_196: string;
                                        export { id_196 as id };
                                        const label_179: string;
                                        export { label_179 as label };
                                    }
                                    export { currentPlace_9 as currentPlace };
                                    export namespace id_197 {
                                        const type_174: string;
                                        export { type_174 as type };
                                        const nullable_172: boolean;
                                        export { nullable_172 as nullable };
                                        const write_172: boolean;
                                        export { write_172 as write };
                                        const read_172: boolean;
                                        export { read_172 as read };
                                        const validators_75: string[];
                                        export { validators_75 as validators };
                                        const errorMessages_75: string[];
                                        export { errorMessages_75 as errorMessages };
                                        const id_198: string;
                                        export { id_198 as id };
                                        const label_180: string;
                                        export { label_180 as label };
                                    }
                                    export { id_197 as id };
                                    export namespace unsignedFile_5 {
                                        const type_175: string;
                                        export { type_175 as type };
                                        const nullable_173: boolean;
                                        export { nullable_173 as nullable };
                                        const write_173: boolean;
                                        export { write_173 as write };
                                        const read_173: boolean;
                                        export { read_173 as read };
                                        const id_199: string;
                                        export { id_199 as id };
                                        const label_181: string;
                                        export { label_181 as label };
                                    }
                                    export { unsignedFile_5 as unsignedFile };
                                    export namespace issuerSignedFile_5 {
                                        const type_176: string;
                                        export { type_176 as type };
                                        const nullable_174: boolean;
                                        export { nullable_174 as nullable };
                                        const write_174: boolean;
                                        export { write_174 as write };
                                        const read_174: boolean;
                                        export { read_174 as read };
                                        const id_200: string;
                                        export { id_200 as id };
                                        const label_182: string;
                                        export { label_182 as label };
                                    }
                                    export { issuerSignedFile_5 as issuerSignedFile };
                                    export namespace beneficiarySignedFile_5 {
                                        const type_177: string;
                                        export { type_177 as type };
                                        const nullable_175: boolean;
                                        export { nullable_175 as nullable };
                                        const write_175: boolean;
                                        export { write_175 as write };
                                        const read_175: boolean;
                                        export { read_175 as read };
                                        const id_201: string;
                                        export { id_201 as id };
                                        const label_183: string;
                                        export { label_183 as label };
                                    }
                                    export { beneficiarySignedFile_5 as beneficiarySignedFile };
                                    export namespace startDate_3 {
                                        const type_178: string;
                                        export { type_178 as type };
                                        const nullable_176: boolean;
                                        export { nullable_176 as nullable };
                                        const write_176: boolean;
                                        export { write_176 as write };
                                        const read_176: boolean;
                                        export { read_176 as read };
                                        const id_202: string;
                                        export { id_202 as id };
                                        const label_184: string;
                                        export { label_184 as label };
                                    }
                                    export { startDate_3 as startDate };
                                    export namespace requestedTransition_9 {
                                        const type_179: string;
                                        export { type_179 as type };
                                        const nullable_177: boolean;
                                        export { nullable_177 as nullable };
                                        const write_177: boolean;
                                        export { write_177 as write };
                                        const read_177: boolean;
                                        export { read_177 as read };
                                        const id_203: string;
                                        export { id_203 as id };
                                        const label_185: string;
                                        export { label_185 as label };
                                    }
                                    export { requestedTransition_9 as requestedTransition };
                                    export namespace eligibleTransitions_9 {
                                        const id_204: string;
                                        export { id_204 as id };
                                        const label_186: string;
                                        export { label_186 as label };
                                    }
                                    export { eligibleTransitions_9 as eligibleTransitions };
                                }
                                export { model_40 as model };
                                const title_38: string;
                                export { title_38 as title };
                                const resourceName_65: string;
                                export { resourceName_65 as resourceName };
                            }
                            export { resource_28 as resource };
                            const resourceName_66: string;
                            export { resourceName_66 as resourceName };
                            const validators_76: string[];
                            export { validators_76 as validators };
                            const errorMessages_76: string[];
                            export { errorMessages_76 as errorMessages };
                            const id_205: string;
                            export { id_205 as id };
                            const label_187: string;
                            export { label_187 as label };
                        }
                        export namespace landlordContract {
                            const targetClass_47: string;
                            export { targetClass_47 as targetClass };
                            const type_180: string;
                            export { type_180 as type };
                            const nullable_178: boolean;
                            export { nullable_178 as nullable };
                            const write_178: boolean;
                            export { write_178 as write };
                            const read_178: boolean;
                            export { read_178 as read };
                            export namespace resource_29 {
                                export namespace model_41 {
                                    export namespace witnessSignedFile_2 {
                                        const type_181: string;
                                        export { type_181 as type };
                                        const nullable_179: boolean;
                                        export { nullable_179 as nullable };
                                        const write_179: boolean;
                                        export { write_179 as write };
                                        const read_179: boolean;
                                        export { read_179 as read };
                                        const validators_77: string[];
                                        export { validators_77 as validators };
                                        const errorMessages_77: string[];
                                        export { errorMessages_77 as errorMessages };
                                        const id_206: string;
                                        export { id_206 as id };
                                        const label_188: string;
                                        export { label_188 as label };
                                    }
                                    export { witnessSignedFile_2 as witnessSignedFile };
                                    export namespace months_2 {
                                        const type_182: string;
                                        export { type_182 as type };
                                        const nullable_180: boolean;
                                        export { nullable_180 as nullable };
                                        const write_180: boolean;
                                        export { write_180 as write };
                                        const read_180: boolean;
                                        export { read_180 as read };
                                        const id_207: string;
                                        export { id_207 as id };
                                        const label_189: string;
                                        export { label_189 as label };
                                    }
                                    export { months_2 as months };
                                    export namespace fee_2 {
                                        const type_183: string;
                                        export { type_183 as type };
                                        const nullable_181: boolean;
                                        export { nullable_181 as nullable };
                                        const write_181: boolean;
                                        export { write_181 as write };
                                        const read_181: boolean;
                                        export { read_181 as read };
                                        const id_208: string;
                                        export { id_208 as id };
                                        const label_190: string;
                                        export { label_190 as label };
                                    }
                                    export { fee_2 as fee };
                                    export namespace rentFreePeriod_1 {
                                        const targetClass_48: string;
                                        export { targetClass_48 as targetClass };
                                        const optionsName_18: string;
                                        export { optionsName_18 as optionsName };
                                        const type_184: string;
                                        export { type_184 as type };
                                        const nullable_182: boolean;
                                        export { nullable_182 as nullable };
                                        const write_182: boolean;
                                        export { write_182 as write };
                                        const read_182: boolean;
                                        export { read_182 as read };
                                        const options_18: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_18 as options };
                                        const validators_78: string[];
                                        export { validators_78 as validators };
                                        const errorMessages_78: string[];
                                        export { errorMessages_78 as errorMessages };
                                        const id_209: string;
                                        export { id_209 as id };
                                        const label_191: string;
                                        export { label_191 as label };
                                    }
                                    export { rentFreePeriod_1 as rentFreePeriod };
                                    export namespace deposit_2 {
                                        const targetClass_49: string;
                                        export { targetClass_49 as targetClass };
                                        const optionsName_19: string;
                                        export { optionsName_19 as optionsName };
                                        const type_185: string;
                                        export { type_185 as type };
                                        const nullable_183: boolean;
                                        export { nullable_183 as nullable };
                                        const write_183: boolean;
                                        export { write_183 as write };
                                        const read_183: boolean;
                                        export { read_183 as read };
                                        const options_19: {
                                            id: number;
                                            label: string;
                                        }[];
                                        export { options_19 as options };
                                        const validators_79: string[];
                                        export { validators_79 as validators };
                                        const errorMessages_79: string[];
                                        export { errorMessages_79 as errorMessages };
                                        const id_210: string;
                                        export { id_210 as id };
                                        const label_192: string;
                                        export { label_192 as label };
                                    }
                                    export { deposit_2 as deposit };
                                    export namespace payments_2 {
                                        const targetClass_50: string;
                                        export { targetClass_50 as targetClass };
                                        const type_186: string;
                                        export { type_186 as type };
                                        const nullable_184: boolean;
                                        export { nullable_184 as nullable };
                                        const write_184: boolean;
                                        export { write_184 as write };
                                        const read_184: boolean;
                                        export { read_184 as read };
                                        export namespace resource_30 {
                                            export namespace model_42 {
                                                export namespace id_211 {
                                                    const type_187: string;
                                                    export { type_187 as type };
                                                    const nullable_185: boolean;
                                                    export { nullable_185 as nullable };
                                                    const write_185: boolean;
                                                    export { write_185 as write };
                                                    const read_185: boolean;
                                                    export { read_185 as read };
                                                    const validators_80: string[];
                                                    export { validators_80 as validators };
                                                    const errorMessages_80: string[];
                                                    export { errorMessages_80 as errorMessages };
                                                    const id_212: string;
                                                    export { id_212 as id };
                                                    const label_193: string;
                                                    export { label_193 as label };
                                                }
                                                export { id_211 as id };
                                                export namespace fee_3 {
                                                    const type_188: string;
                                                    export { type_188 as type };
                                                    const nullable_186: boolean;
                                                    export { nullable_186 as nullable };
                                                    const write_186: boolean;
                                                    export { write_186 as write };
                                                    const read_186: boolean;
                                                    export { read_186 as read };
                                                    const id_213: string;
                                                    export { id_213 as id };
                                                    const label_194: string;
                                                    export { label_194 as label };
                                                }
                                                export { fee_3 as fee };
                                                export namespace dueDate {
                                                    const type_189: string;
                                                    export { type_189 as type };
                                                    const nullable_187: boolean;
                                                    export { nullable_187 as nullable };
                                                    const write_187: boolean;
                                                    export { write_187 as write };
                                                    const read_187: boolean;
                                                    export { read_187 as read };
                                                    const id_214: string;
                                                    export { id_214 as id };
                                                    const label_195: string;
                                                    export { label_195 as label };
                                                }
                                                export namespace status {
                                                    const targetClass_51: string;
                                                    export { targetClass_51 as targetClass };
                                                    const optionsName_20: string;
                                                    export { optionsName_20 as optionsName };
                                                    const type_190: string;
                                                    export { type_190 as type };
                                                    const nullable_188: boolean;
                                                    export { nullable_188 as nullable };
                                                    const write_188: boolean;
                                                    export { write_188 as write };
                                                    const read_188: boolean;
                                                    export { read_188 as read };
                                                    const options_20: {
                                                        id: number;
                                                        label: string;
                                                    }[];
                                                    export { options_20 as options };
                                                    const validators_81: string[];
                                                    export { validators_81 as validators };
                                                    const errorMessages_81: string[];
                                                    export { errorMessages_81 as errorMessages };
                                                    const id_215: string;
                                                    export { id_215 as id };
                                                    const label_196: string;
                                                    export { label_196 as label };
                                                }
                                                export namespace type_191 {
                                                    const targetClass_52: string;
                                                    export { targetClass_52 as targetClass };
                                                    const optionsName_21: string;
                                                    export { optionsName_21 as optionsName };
                                                    const type_192: string;
                                                    export { type_192 as type };
                                                    const nullable_189: boolean;
                                                    export { nullable_189 as nullable };
                                                    const write_189: boolean;
                                                    export { write_189 as write };
                                                    const read_189: boolean;
                                                    export { read_189 as read };
                                                    const options_21: {
                                                        id: number;
                                                        label: string;
                                                    }[];
                                                    export { options_21 as options };
                                                    const validators_82: string[];
                                                    export { validators_82 as validators };
                                                    const errorMessages_82: string[];
                                                    export { errorMessages_82 as errorMessages };
                                                    const id_216: string;
                                                    export { id_216 as id };
                                                    const label_197: string;
                                                    export { label_197 as label };
                                                }
                                                export { type_191 as type };
                                            }
                                            export { model_42 as model };
                                            const title_39: string;
                                            export { title_39 as title };
                                            const resourceName_67: string;
                                            export { resourceName_67 as resourceName };
                                        }
                                        export { resource_30 as resource };
                                        const resourceName_68: string;
                                        export { resourceName_68 as resourceName };
                                        const validators_83: string[];
                                        export { validators_83 as validators };
                                        const errorMessages_83: string[];
                                        export { errorMessages_83 as errorMessages };
                                        const id_217: string;
                                        export { id_217 as id };
                                        const label_198: string;
                                        export { label_198 as label };
                                    }
                                    export { payments_2 as payments };
                                    export namespace defaultPaymentDay_2 {
                                        const type_193: string;
                                        export { type_193 as type };
                                        const nullable_190: boolean;
                                        export { nullable_190 as nullable };
                                        const write_190: boolean;
                                        export { write_190 as write };
                                        const read_190: boolean;
                                        export { read_190 as read };
                                        const id_218: string;
                                        export { id_218 as id };
                                        const label_199: string;
                                        export { label_199 as label };
                                    }
                                    export { defaultPaymentDay_2 as defaultPaymentDay };
                                    export namespace endDate_3 {
                                        const type_194: string;
                                        export { type_194 as type };
                                        const nullable_191: boolean;
                                        export { nullable_191 as nullable };
                                        const write_191: boolean;
                                        export { write_191 as write };
                                        const read_191: boolean;
                                        export { read_191 as read };
                                        const id_219: string;
                                        export { id_219 as id };
                                        const label_200: string;
                                        export { label_200 as label };
                                    }
                                    export { endDate_3 as endDate };
                                    export namespace witnessFullName_1 {
                                        const type_195: string;
                                        export { type_195 as type };
                                        const nullable_192: boolean;
                                        export { nullable_192 as nullable };
                                        const write_192: boolean;
                                        export { write_192 as write };
                                        const read_192: boolean;
                                        export { read_192 as read };
                                        const id_220: string;
                                        export { id_220 as id };
                                        const label_201: string;
                                        export { label_201 as label };
                                    }
                                    export { witnessFullName_1 as witnessFullName };
                                    export namespace witnessEmail_1 {
                                        const type_196: string;
                                        export { type_196 as type };
                                        const nullable_193: boolean;
                                        export { nullable_193 as nullable };
                                        const write_193: boolean;
                                        export { write_193 as write };
                                        const read_193: boolean;
                                        export { read_193 as read };
                                        const id_221: string;
                                        export { id_221 as id };
                                        const label_202: string;
                                        export { label_202 as label };
                                    }
                                    export { witnessEmail_1 as witnessEmail };
                                    export namespace currentPlace_10 {
                                        const targetClass_53: string;
                                        export { targetClass_53 as targetClass };
                                        const optionsName_22: string;
                                        export { optionsName_22 as optionsName };
                                        const type_197: string;
                                        export { type_197 as type };
                                        const nullable_194: boolean;
                                        export { nullable_194 as nullable };
                                        const write_194: boolean;
                                        export { write_194 as write };
                                        const read_194: boolean;
                                        export { read_194 as read };
                                        const options_22: {
                                            id: string;
                                            label: string;
                                        }[];
                                        export { options_22 as options };
                                        const validators_84: string[];
                                        export { validators_84 as validators };
                                        const errorMessages_84: string[];
                                        export { errorMessages_84 as errorMessages };
                                        const id_222: string;
                                        export { id_222 as id };
                                        const label_203: string;
                                        export { label_203 as label };
                                    }
                                    export { currentPlace_10 as currentPlace };
                                    export namespace id_223 {
                                        const type_198: string;
                                        export { type_198 as type };
                                        const nullable_195: boolean;
                                        export { nullable_195 as nullable };
                                        const write_195: boolean;
                                        export { write_195 as write };
                                        const read_195: boolean;
                                        export { read_195 as read };
                                        const validators_85: string[];
                                        export { validators_85 as validators };
                                        const errorMessages_85: string[];
                                        export { errorMessages_85 as errorMessages };
                                        const id_224: string;
                                        export { id_224 as id };
                                        const label_204: string;
                                        export { label_204 as label };
                                    }
                                    export { id_223 as id };
                                    export namespace unsignedFile_6 {
                                        const type_199: string;
                                        export { type_199 as type };
                                        const nullable_196: boolean;
                                        export { nullable_196 as nullable };
                                        const write_196: boolean;
                                        export { write_196 as write };
                                        const read_196: boolean;
                                        export { read_196 as read };
                                        const id_225: string;
                                        export { id_225 as id };
                                        const label_205: string;
                                        export { label_205 as label };
                                    }
                                    export { unsignedFile_6 as unsignedFile };
                                    export namespace issuerSignedFile_6 {
                                        const type_200: string;
                                        export { type_200 as type };
                                        const nullable_197: boolean;
                                        export { nullable_197 as nullable };
                                        const write_197: boolean;
                                        export { write_197 as write };
                                        const read_197: boolean;
                                        export { read_197 as read };
                                        const id_226: string;
                                        export { id_226 as id };
                                        const label_206: string;
                                        export { label_206 as label };
                                    }
                                    export { issuerSignedFile_6 as issuerSignedFile };
                                    export namespace beneficiarySignedFile_6 {
                                        const type_201: string;
                                        export { type_201 as type };
                                        const nullable_198: boolean;
                                        export { nullable_198 as nullable };
                                        const write_198: boolean;
                                        export { write_198 as write };
                                        const read_198: boolean;
                                        export { read_198 as read };
                                        const id_227: string;
                                        export { id_227 as id };
                                        const label_207: string;
                                        export { label_207 as label };
                                    }
                                    export { beneficiarySignedFile_6 as beneficiarySignedFile };
                                    export namespace startDate_4 {
                                        const type_202: string;
                                        export { type_202 as type };
                                        const nullable_199: boolean;
                                        export { nullable_199 as nullable };
                                        const write_199: boolean;
                                        export { write_199 as write };
                                        const read_199: boolean;
                                        export { read_199 as read };
                                        const id_228: string;
                                        export { id_228 as id };
                                        const label_208: string;
                                        export { label_208 as label };
                                    }
                                    export { startDate_4 as startDate };
                                    export namespace requestedTransition_10 {
                                        const type_203: string;
                                        export { type_203 as type };
                                        const nullable_200: boolean;
                                        export { nullable_200 as nullable };
                                        const write_200: boolean;
                                        export { write_200 as write };
                                        const read_200: boolean;
                                        export { read_200 as read };
                                        const id_229: string;
                                        export { id_229 as id };
                                        const label_209: string;
                                        export { label_209 as label };
                                    }
                                    export { requestedTransition_10 as requestedTransition };
                                    export namespace eligibleTransitions_10 {
                                        const id_230: string;
                                        export { id_230 as id };
                                        const label_210: string;
                                        export { label_210 as label };
                                    }
                                    export { eligibleTransitions_10 as eligibleTransitions };
                                }
                                export { model_41 as model };
                                const title_40: string;
                                export { title_40 as title };
                                const resourceName_69: string;
                                export { resourceName_69 as resourceName };
                            }
                            export { resource_29 as resource };
                            const resourceName_70: string;
                            export { resourceName_70 as resourceName };
                            const validators_86: string[];
                            export { validators_86 as validators };
                            const errorMessages_86: string[];
                            export { errorMessages_86 as errorMessages };
                            const id_231: string;
                            export { id_231 as id };
                            const label_211: string;
                            export { label_211 as label };
                        }
                        export namespace id_232 {
                            const type_204: string;
                            export { type_204 as type };
                            const nullable_201: boolean;
                            export { nullable_201 as nullable };
                            const write_201: boolean;
                            export { write_201 as write };
                            const read_201: boolean;
                            export { read_201 as read };
                            const validators_87: string[];
                            export { validators_87 as validators };
                            const errorMessages_87: string[];
                            export { errorMessages_87 as errorMessages };
                            const id_233: string;
                            export { id_233 as id };
                            const label_212: string;
                            export { label_212 as label };
                        }
                        export { id_232 as id };
                        export namespace xeroContactId {
                            const type_205: string;
                            export { type_205 as type };
                            const nullable_202: boolean;
                            export { nullable_202 as nullable };
                            const write_202: boolean;
                            export { write_202 as write };
                            const read_202: boolean;
                            export { read_202 as read };
                            const id_234: string;
                            export { id_234 as id };
                            const label_213: string;
                            export { label_213 as label };
                        }
                        export namespace rent_1 {
                            const type_206: string;
                            export { type_206 as type };
                            const nullable_203: boolean;
                            export { nullable_203 as nullable };
                            const write_203: boolean;
                            export { write_203 as write };
                            const read_203: boolean;
                            export { read_203 as read };
                            const id_235: string;
                            export { id_235 as id };
                            const label_214: string;
                            export { label_214 as label };
                        }
                        export { rent_1 as rent };
                    }
                    export { model_39 as model };
                    const title_41: string;
                    export { title_41 as title };
                    const resourceName_71: string;
                    export { resourceName_71 as resourceName };
                }
                export { resource_27 as resource };
                const resourceName_72: string;
                export { resourceName_72 as resourceName };
                const id_236: string;
                export { id_236 as id };
                const label_215: string;
                export { label_215 as label };
            }
            export namespace negotiation {
                const targetClass_54: string;
                export { targetClass_54 as targetClass };
                const type_207: string;
                export { type_207 as type };
                const nullable_204: boolean;
                export { nullable_204 as nullable };
                const write_204: boolean;
                export { write_204 as write };
                const read_204: boolean;
                export { read_204 as read };
                export namespace resource_31 {
                    export namespace model_43 {
                        export namespace id_237 {
                            const type_208: string;
                            export { type_208 as type };
                            const nullable_205: boolean;
                            export { nullable_205 as nullable };
                            const write_205: boolean;
                            export { write_205 as write };
                            const read_205: boolean;
                            export { read_205 as read };
                            const validators_88: string[];
                            export { validators_88 as validators };
                            const errorMessages_88: string[];
                            export { errorMessages_88 as errorMessages };
                            const id_238: string;
                            export { id_238 as id };
                            const label_216: string;
                            export { label_216 as label };
                        }
                        export { id_237 as id };
                        export namespace acceptedOffer_1 {
                            const type_209: string;
                            export { type_209 as type };
                            const nullable_206: boolean;
                            export { nullable_206 as nullable };
                            const write_206: boolean;
                            export { write_206 as write };
                            const read_206: boolean;
                            export { read_206 as read };
                            const validators_89: string[];
                            export { validators_89 as validators };
                            const errorMessages_89: string[];
                            export { errorMessages_89 as errorMessages };
                            const id_239: string;
                            export { id_239 as id };
                            const label_217: string;
                            export { label_217 as label };
                        }
                        export { acceptedOffer_1 as acceptedOffer };
                        export namespace negotiationOffers_1 {
                            const targetClass_55: string;
                            export { targetClass_55 as targetClass };
                            const type_210: string;
                            export { type_210 as type };
                            const nullable_207: boolean;
                            export { nullable_207 as nullable };
                            const write_207: boolean;
                            export { write_207 as write };
                            const read_207: boolean;
                            export { read_207 as read };
                            export namespace resource_32 {
                                export namespace model_44 {
                                    export namespace id_240 {
                                        const type_211: string;
                                        export { type_211 as type };
                                        const nullable_208: boolean;
                                        export { nullable_208 as nullable };
                                        const write_208: boolean;
                                        export { write_208 as write };
                                        const read_208: boolean;
                                        export { read_208 as read };
                                        const validators_90: string[];
                                        export { validators_90 as validators };
                                        const errorMessages_90: string[];
                                        export { errorMessages_90 as errorMessages };
                                        const id_241: string;
                                        export { id_241 as id };
                                        const label_218: string;
                                        export { label_218 as label };
                                    }
                                    export { id_240 as id };
                                    export namespace offer_1 {
                                        const type_212: string;
                                        export { type_212 as type };
                                        const nullable_209: boolean;
                                        export { nullable_209 as nullable };
                                        const write_209: boolean;
                                        export { write_209 as write };
                                        const read_209: boolean;
                                        export { read_209 as read };
                                        const validators_91: string[];
                                        export { validators_91 as validators };
                                        const errorMessages_91: string[];
                                        export { errorMessages_91 as errorMessages };
                                        const id_242: string;
                                        export { id_242 as id };
                                        const label_219: string;
                                        export { label_219 as label };
                                    }
                                    export { offer_1 as offer };
                                    export namespace currentPlace_11 {
                                        const targetClass_56: string;
                                        export { targetClass_56 as targetClass };
                                        const optionsName_23: string;
                                        export { optionsName_23 as optionsName };
                                        const type_213: string;
                                        export { type_213 as type };
                                        const nullable_210: boolean;
                                        export { nullable_210 as nullable };
                                        const write_210: boolean;
                                        export { write_210 as write };
                                        const read_210: boolean;
                                        export { read_210 as read };
                                        const options_23: {
                                            id: string;
                                            label: string;
                                        }[];
                                        export { options_23 as options };
                                        const validators_92: string[];
                                        export { validators_92 as validators };
                                        const errorMessages_92: string[];
                                        export { errorMessages_92 as errorMessages };
                                        const id_243: string;
                                        export { id_243 as id };
                                        const label_220: string;
                                        export { label_220 as label };
                                    }
                                    export { currentPlace_11 as currentPlace };
                                    export namespace requestedTransition_11 {
                                        const type_214: string;
                                        export { type_214 as type };
                                        const nullable_211: boolean;
                                        export { nullable_211 as nullable };
                                        const write_211: boolean;
                                        export { write_211 as write };
                                        const read_211: boolean;
                                        export { read_211 as read };
                                        const id_244: string;
                                        export { id_244 as id };
                                        const label_221: string;
                                        export { label_221 as label };
                                    }
                                    export { requestedTransition_11 as requestedTransition };
                                    export namespace eligibleTransitions_11 {
                                        const id_245: string;
                                        export { id_245 as id };
                                        const label_222: string;
                                        export { label_222 as label };
                                    }
                                    export { eligibleTransitions_11 as eligibleTransitions };
                                }
                                export { model_44 as model };
                                const title_42: string;
                                export { title_42 as title };
                                const resourceName_73: string;
                                export { resourceName_73 as resourceName };
                            }
                            export { resource_32 as resource };
                            const resourceName_74: string;
                            export { resourceName_74 as resourceName };
                            const validators_93: string[];
                            export { validators_93 as validators };
                            const errorMessages_93: string[];
                            export { errorMessages_93 as errorMessages };
                            const id_246: string;
                            export { id_246 as id };
                            const label_223: string;
                            export { label_223 as label };
                        }
                        export { negotiationOffers_1 as negotiationOffers };
                        export namespace currentPlace_12 {
                            const targetClass_57: string;
                            export { targetClass_57 as targetClass };
                            const optionsName_24: string;
                            export { optionsName_24 as optionsName };
                            const type_215: string;
                            export { type_215 as type };
                            const nullable_212: boolean;
                            export { nullable_212 as nullable };
                            const write_212: boolean;
                            export { write_212 as write };
                            const read_212: boolean;
                            export { read_212 as read };
                            const options_24: {
                                id: string;
                                label: string;
                            }[];
                            export { options_24 as options };
                            const validators_94: string[];
                            export { validators_94 as validators };
                            const errorMessages_94: string[];
                            export { errorMessages_94 as errorMessages };
                            const id_247: string;
                            export { id_247 as id };
                            const label_224: string;
                            export { label_224 as label };
                        }
                        export { currentPlace_12 as currentPlace };
                        export namespace requestedTransition_12 {
                            const type_216: string;
                            export { type_216 as type };
                            const nullable_213: boolean;
                            export { nullable_213 as nullable };
                            const write_213: boolean;
                            export { write_213 as write };
                            const read_213: boolean;
                            export { read_213 as read };
                            const id_248: string;
                            export { id_248 as id };
                            const label_225: string;
                            export { label_225 as label };
                        }
                        export { requestedTransition_12 as requestedTransition };
                        export namespace eligibleTransitions_12 {
                            const id_249: string;
                            export { id_249 as id };
                            const label_226: string;
                            export { label_226 as label };
                        }
                        export { eligibleTransitions_12 as eligibleTransitions };
                    }
                    export { model_43 as model };
                    const title_43: string;
                    export { title_43 as title };
                    const resourceName_75: string;
                    export { resourceName_75 as resourceName };
                }
                export { resource_31 as resource };
                const resourceName_76: string;
                export { resourceName_76 as resourceName };
                const id_250: string;
                export { id_250 as id };
                const label_227: string;
                export { label_227 as label };
            }
            export namespace renewals {
                const targetClass_58: string;
                export { targetClass_58 as targetClass };
                const type_217: string;
                export { type_217 as type };
                const nullable_214: boolean;
                export { nullable_214 as nullable };
                const write_214: boolean;
                export { write_214 as write };
                const read_214: boolean;
                export { read_214 as read };
                export namespace resource_33 {
                    export namespace model_45 {
                        export namespace landlordContract_1 {
                            const targetClass_59: string;
                            export { targetClass_59 as targetClass };
                            const type_218: string;
                            export { type_218 as type };
                            const nullable_215: boolean;
                            export { nullable_215 as nullable };
                            const write_215: boolean;
                            export { write_215 as write };
                            const read_215: boolean;
                            export { read_215 as read };
                            export namespace resource_34 {
                                export namespace model_46 {
                                    export namespace rent_2 {
                                        const type_219: string;
                                        export { type_219 as type };
                                        const nullable_216: boolean;
                                        export { nullable_216 as nullable };
                                        const write_216: boolean;
                                        export { write_216 as write };
                                        const read_216: boolean;
                                        export { read_216 as read };
                                        const id_251: string;
                                        export { id_251 as id };
                                        const label_228: string;
                                        export { label_228 as label };
                                    }
                                    export { rent_2 as rent };
                                    export namespace depositAmount_1 {
                                        const type_220: string;
                                        export { type_220 as type };
                                        const nullable_217: boolean;
                                        export { nullable_217 as nullable };
                                        const write_217: boolean;
                                        export { write_217 as write };
                                        const read_217: boolean;
                                        export { read_217 as read };
                                        const id_252: string;
                                        export { id_252 as id };
                                        const label_229: string;
                                        export { label_229 as label };
                                    }
                                    export { depositAmount_1 as depositAmount };
                                    export namespace endDate_4 {
                                        const type_221: string;
                                        export { type_221 as type };
                                        const nullable_218: boolean;
                                        export { nullable_218 as nullable };
                                        const write_218: boolean;
                                        export { write_218 as write };
                                        const read_218: boolean;
                                        export { read_218 as read };
                                        const id_253: string;
                                        export { id_253 as id };
                                        const label_230: string;
                                        export { label_230 as label };
                                    }
                                    export { endDate_4 as endDate };
                                    export namespace id_254 {
                                        const type_222: string;
                                        export { type_222 as type };
                                        const nullable_219: boolean;
                                        export { nullable_219 as nullable };
                                        const write_219: boolean;
                                        export { write_219 as write };
                                        const read_219: boolean;
                                        export { read_219 as read };
                                        const validators_95: string[];
                                        export { validators_95 as validators };
                                        const errorMessages_95: string[];
                                        export { errorMessages_95 as errorMessages };
                                        const id_255: string;
                                        export { id_255 as id };
                                        const label_231: string;
                                        export { label_231 as label };
                                    }
                                    export { id_254 as id };
                                    export namespace unsignedFile_7 {
                                        const type_223: string;
                                        export { type_223 as type };
                                        const nullable_220: boolean;
                                        export { nullable_220 as nullable };
                                        const write_220: boolean;
                                        export { write_220 as write };
                                        const read_220: boolean;
                                        export { read_220 as read };
                                        const id_256: string;
                                        export { id_256 as id };
                                        const label_232: string;
                                        export { label_232 as label };
                                    }
                                    export { unsignedFile_7 as unsignedFile };
                                    export namespace issuerSignedFile_7 {
                                        const type_224: string;
                                        export { type_224 as type };
                                        const nullable_221: boolean;
                                        export { nullable_221 as nullable };
                                        const write_221: boolean;
                                        export { write_221 as write };
                                        const read_221: boolean;
                                        export { read_221 as read };
                                        const id_257: string;
                                        export { id_257 as id };
                                        const label_233: string;
                                        export { label_233 as label };
                                    }
                                    export { issuerSignedFile_7 as issuerSignedFile };
                                    export namespace beneficiarySignedFile_7 {
                                        const type_225: string;
                                        export { type_225 as type };
                                        const nullable_222: boolean;
                                        export { nullable_222 as nullable };
                                        const write_222: boolean;
                                        export { write_222 as write };
                                        const read_222: boolean;
                                        export { read_222 as read };
                                        const id_258: string;
                                        export { id_258 as id };
                                        const label_234: string;
                                        export { label_234 as label };
                                    }
                                    export { beneficiarySignedFile_7 as beneficiarySignedFile };
                                    export namespace startDate_5 {
                                        const type_226: string;
                                        export { type_226 as type };
                                        const nullable_223: boolean;
                                        export { nullable_223 as nullable };
                                        const write_223: boolean;
                                        export { write_223 as write };
                                        const read_223: boolean;
                                        export { read_223 as read };
                                        const id_259: string;
                                        export { id_259 as id };
                                        const label_235: string;
                                        export { label_235 as label };
                                    }
                                    export { startDate_5 as startDate };
                                    export namespace currentPlace_13 {
                                        const type_227: string;
                                        export { type_227 as type };
                                        const nullable_224: boolean;
                                        export { nullable_224 as nullable };
                                        const write_224: boolean;
                                        export { write_224 as write };
                                        const read_224: boolean;
                                        export { read_224 as read };
                                        const validators_96: string[];
                                        export { validators_96 as validators };
                                        const errorMessages_96: string[];
                                        export { errorMessages_96 as errorMessages };
                                        const id_260: string;
                                        export { id_260 as id };
                                        const label_236: string;
                                        export { label_236 as label };
                                    }
                                    export { currentPlace_13 as currentPlace };
                                    export namespace requestedTransition_13 {
                                        const type_228: string;
                                        export { type_228 as type };
                                        const nullable_225: boolean;
                                        export { nullable_225 as nullable };
                                        const write_225: boolean;
                                        export { write_225 as write };
                                        const read_225: boolean;
                                        export { read_225 as read };
                                        const id_261: string;
                                        export { id_261 as id };
                                        const label_237: string;
                                        export { label_237 as label };
                                    }
                                    export { requestedTransition_13 as requestedTransition };
                                    export namespace eligibleTransitions_13 {
                                        const id_262: string;
                                        export { id_262 as id };
                                        const label_238: string;
                                        export { label_238 as label };
                                    }
                                    export { eligibleTransitions_13 as eligibleTransitions };
                                }
                                export { model_46 as model };
                                const title_44: string;
                                export { title_44 as title };
                                const resourceName_77: string;
                                export { resourceName_77 as resourceName };
                            }
                            export { resource_34 as resource };
                            const resourceName_78: string;
                            export { resourceName_78 as resourceName };
                            const validators_97: string[];
                            export { validators_97 as validators };
                            const errorMessages_97: string[];
                            export { errorMessages_97 as errorMessages };
                            const id_263: string;
                            export { id_263 as id };
                            const label_239: string;
                            export { label_239 as label };
                        }
                        export { landlordContract_1 as landlordContract };
                        export namespace id_264 {
                            const type_229: string;
                            export { type_229 as type };
                            const nullable_226: boolean;
                            export { nullable_226 as nullable };
                            const write_226: boolean;
                            export { write_226 as write };
                            const read_226: boolean;
                            export { read_226 as read };
                            const validators_98: string[];
                            export { validators_98 as validators };
                            const errorMessages_98: string[];
                            export { errorMessages_98 as errorMessages };
                            const id_265: string;
                            export { id_265 as id };
                            const label_240: string;
                            export { label_240 as label };
                        }
                        export { id_264 as id };
                        export namespace xeroContactId_1 {
                            const type_230: string;
                            export { type_230 as type };
                            const nullable_227: boolean;
                            export { nullable_227 as nullable };
                            const write_227: boolean;
                            export { write_227 as write };
                            const read_227: boolean;
                            export { read_227 as read };
                            const id_266: string;
                            export { id_266 as id };
                            const label_241: string;
                            export { label_241 as label };
                        }
                        export { xeroContactId_1 as xeroContactId };
                    }
                    export { model_45 as model };
                    const title_45: string;
                    export { title_45 as title };
                    const resourceName_79: string;
                    export { resourceName_79 as resourceName };
                }
                export { resource_33 as resource };
                const resourceName_80: string;
                export { resourceName_80 as resourceName };
                const validators_99: string[];
                export { validators_99 as validators };
                const errorMessages_99: string[];
                export { errorMessages_99 as errorMessages };
                const id_267: string;
                export { id_267 as id };
                const label_242: string;
                export { label_242 as label };
            }
            export namespace activeTenancy {
                const targetClass_60: string;
                export { targetClass_60 as targetClass };
                const type_231: string;
                export { type_231 as type };
                const nullable_228: boolean;
                export { nullable_228 as nullable };
                const write_228: boolean;
                export { write_228 as write };
                const read_228: boolean;
                export { read_228 as read };
                export namespace resource_35 {
                    export namespace model_47 {
                        export namespace id_268 {
                            const type_232: string;
                            export { type_232 as type };
                            const nullable_229: boolean;
                            export { nullable_229 as nullable };
                            const write_229: boolean;
                            export { write_229 as write };
                            const read_229: boolean;
                            export { read_229 as read };
                            const validators_100: string[];
                            export { validators_100 as validators };
                            const errorMessages_100: string[];
                            export { errorMessages_100 as errorMessages };
                            const id_269: string;
                            export { id_269 as id };
                            const label_243: string;
                            export { label_243 as label };
                        }
                        export { id_268 as id };
                        export namespace xeroContactId_2 {
                            const type_233: string;
                            export { type_233 as type };
                            const nullable_230: boolean;
                            export { nullable_230 as nullable };
                            const write_230: boolean;
                            export { write_230 as write };
                            const read_230: boolean;
                            export { read_230 as read };
                            const id_270: string;
                            export { id_270 as id };
                            const label_244: string;
                            export { label_244 as label };
                        }
                        export { xeroContactId_2 as xeroContactId };
                        export namespace rent_3 {
                            const type_234: string;
                            export { type_234 as type };
                            const nullable_231: boolean;
                            export { nullable_231 as nullable };
                            const write_231: boolean;
                            export { write_231 as write };
                            const read_231: boolean;
                            export { read_231 as read };
                            const id_271: string;
                            export { id_271 as id };
                            const label_245: string;
                            export { label_245 as label };
                        }
                        export { rent_3 as rent };
                        export namespace currentPlace_14 {
                            const targetClass_61: string;
                            export { targetClass_61 as targetClass };
                            const optionsName_25: string;
                            export { optionsName_25 as optionsName };
                            const type_235: string;
                            export { type_235 as type };
                            const nullable_232: boolean;
                            export { nullable_232 as nullable };
                            const write_232: boolean;
                            export { write_232 as write };
                            const read_232: boolean;
                            export { read_232 as read };
                            const options_25: {
                                id: string;
                                label: string;
                            }[];
                            export { options_25 as options };
                            const validators_101: string[];
                            export { validators_101 as validators };
                            const errorMessages_101: string[];
                            export { errorMessages_101 as errorMessages };
                            const id_272: string;
                            export { id_272 as id };
                            const label_246: string;
                            export { label_246 as label };
                        }
                        export { currentPlace_14 as currentPlace };
                        export namespace requestedTransition_14 {
                            const type_236: string;
                            export { type_236 as type };
                            const nullable_233: boolean;
                            export { nullable_233 as nullable };
                            const write_233: boolean;
                            export { write_233 as write };
                            const read_233: boolean;
                            export { read_233 as read };
                            const id_273: string;
                            export { id_273 as id };
                            const label_247: string;
                            export { label_247 as label };
                        }
                        export { requestedTransition_14 as requestedTransition };
                        export namespace eligibleTransitions_14 {
                            const id_274: string;
                            export { id_274 as id };
                            const label_248: string;
                            export { label_248 as label };
                        }
                        export { eligibleTransitions_14 as eligibleTransitions };
                    }
                    export { model_47 as model };
                    const title_46: string;
                    export { title_46 as title };
                    const resourceName_81: string;
                    export { resourceName_81 as resourceName };
                }
                export { resource_35 as resource };
                const resourceName_82: string;
                export { resourceName_82 as resourceName };
                const validators_102: string[];
                export { validators_102 as validators };
                const errorMessages_102: string[];
                export { errorMessages_102 as errorMessages };
                const id_275: string;
                export { id_275 as id };
                const label_249: string;
                export { label_249 as label };
            }
            export namespace currentPlace_15 {
                const targetClass_62: string;
                export { targetClass_62 as targetClass };
                const optionsName_26: string;
                export { optionsName_26 as optionsName };
                const type_237: string;
                export { type_237 as type };
                const nullable_234: boolean;
                export { nullable_234 as nullable };
                const write_234: boolean;
                export { write_234 as write };
                const read_234: boolean;
                export { read_234 as read };
                const options_26: {
                    id: string;
                    label: string;
                }[];
                export { options_26 as options };
                const validators_103: string[];
                export { validators_103 as validators };
                const errorMessages_103: string[];
                export { errorMessages_103 as errorMessages };
                const id_276: string;
                export { id_276 as id };
                const label_250: string;
                export { label_250 as label };
            }
            export { currentPlace_15 as currentPlace };
            export namespace requestedTransition_15 {
                const id_277: string;
                export { id_277 as id };
                const label_251: string;
                export { label_251 as label };
            }
            export { requestedTransition_15 as requestedTransition };
            export namespace eligibleTransitions_15 {
                const id_278: string;
                export { id_278 as id };
                const label_252: string;
                export { label_252 as label };
            }
            export { eligibleTransitions_15 as eligibleTransitions };
        }
        export { model_24 as model };
        const title_47: string;
        export { title_47 as title };
        const resourceName_83: string;
        export { resourceName_83 as resourceName };
    }
    export namespace first_landlord_tenancies {
        const model_48: never[];
        export { model_48 as model };
        const title_48: string;
        export { title_48 as title };
        const resourceName_84: string;
        export { resourceName_84 as resourceName };
    }
    export namespace landlord_tenancies {
        export namespace model_49 {
            export namespace id_279 {
                const type_238: string;
                export { type_238 as type };
                const nullable_235: boolean;
                export { nullable_235 as nullable };
                const write_235: boolean;
                export { write_235 as write };
                const read_235: boolean;
                export { read_235 as read };
                const validators_104: string[];
                export { validators_104 as validators };
                const errorMessages_104: string[];
                export { errorMessages_104 as errorMessages };
                const id_280: string;
                export { id_280 as id };
                const label_253: string;
                export { label_253 as label };
            }
            export { id_279 as id };
            export namespace xeroContactId_3 {
                const type_239: string;
                export { type_239 as type };
                const nullable_236: boolean;
                export { nullable_236 as nullable };
                const write_236: boolean;
                export { write_236 as write };
                const read_236: boolean;
                export { read_236 as read };
                const id_281: string;
                export { id_281 as id };
                const label_254: string;
                export { label_254 as label };
            }
            export { xeroContactId_3 as xeroContactId };
            export namespace currentPlace_16 {
                const targetClass_63: string;
                export { targetClass_63 as targetClass };
                const optionsName_27: string;
                export { optionsName_27 as optionsName };
                const type_240: string;
                export { type_240 as type };
                const nullable_237: boolean;
                export { nullable_237 as nullable };
                const write_237: boolean;
                export { write_237 as write };
                const read_237: boolean;
                export { read_237 as read };
                const options_27: {
                    id: string;
                    label: string;
                }[];
                export { options_27 as options };
                const validators_105: string[];
                export { validators_105 as validators };
                const errorMessages_105: string[];
                export { errorMessages_105 as errorMessages };
                const id_282: string;
                export { id_282 as id };
                const label_255: string;
                export { label_255 as label };
            }
            export { currentPlace_16 as currentPlace };
            export namespace requestedTransition_16 {
                const type_241: string;
                export { type_241 as type };
                const nullable_238: boolean;
                export { nullable_238 as nullable };
                const write_238: boolean;
                export { write_238 as write };
                const read_238: boolean;
                export { read_238 as read };
                const id_283: string;
                export { id_283 as id };
                const label_256: string;
                export { label_256 as label };
            }
            export { requestedTransition_16 as requestedTransition };
            export namespace eligibleTransitions_16 {
                const id_284: string;
                export { id_284 as id };
                const label_257: string;
                export { label_257 as label };
            }
            export { eligibleTransitions_16 as eligibleTransitions };
        }
        export { model_49 as model };
        const title_49: string;
        export { title_49 as title };
        const resourceName_85: string;
        export { resourceName_85 as resourceName };
    }
    export namespace renewal_landlord_tenancies {
        export namespace model_50 {
            export namespace landlordRelationship {
                const targetClass_64: string;
                export { targetClass_64 as targetClass };
                const type_242: string;
                export { type_242 as type };
                const nullable_239: boolean;
                export { nullable_239 as nullable };
                const write_239: boolean;
                export { write_239 as write };
                const read_239: boolean;
                export { read_239 as read };
                export namespace resource_36 {
                    export namespace model_51 {
                        export namespace id_285 {
                            const type_243: string;
                            export { type_243 as type };
                            const nullable_240: boolean;
                            export { nullable_240 as nullable };
                            const write_240: boolean;
                            export { write_240 as write };
                            const read_240: boolean;
                            export { read_240 as read };
                            const validators_106: string[];
                            export { validators_106 as validators };
                            const errorMessages_106: string[];
                            export { errorMessages_106 as errorMessages };
                            const id_286: string;
                            export { id_286 as id };
                            const label_258: string;
                            export { label_258 as label };
                        }
                        export { id_285 as id };
                        export namespace currentPlace_17 {
                            const targetClass_65: string;
                            export { targetClass_65 as targetClass };
                            const optionsName_28: string;
                            export { optionsName_28 as optionsName };
                            const type_244: string;
                            export { type_244 as type };
                            const nullable_241: boolean;
                            export { nullable_241 as nullable };
                            const write_241: boolean;
                            export { write_241 as write };
                            const read_241: boolean;
                            export { read_241 as read };
                            const options_28: {
                                id: string;
                                label: string;
                            }[];
                            export { options_28 as options };
                            const validators_107: string[];
                            export { validators_107 as validators };
                            const errorMessages_107: string[];
                            export { errorMessages_107 as errorMessages };
                            const id_287: string;
                            export { id_287 as id };
                            const label_259: string;
                            export { label_259 as label };
                        }
                        export { currentPlace_17 as currentPlace };
                        export namespace requestedTransition_17 {
                            const id_288: string;
                            export { id_288 as id };
                            const label_260: string;
                            export { label_260 as label };
                        }
                        export { requestedTransition_17 as requestedTransition };
                        export namespace eligibleTransitions_17 {
                            const id_289: string;
                            export { id_289 as id };
                            const label_261: string;
                            export { label_261 as label };
                        }
                        export { eligibleTransitions_17 as eligibleTransitions };
                    }
                    export { model_51 as model };
                    const title_50: string;
                    export { title_50 as title };
                    const resourceName_86: string;
                    export { resourceName_86 as resourceName };
                }
                export { resource_36 as resource };
                const resourceName_87: string;
                export { resourceName_87 as resourceName };
                const optionText_20: string;
                export { optionText_20 as optionText };
                const validators_108: string[];
                export { validators_108 as validators };
                const errorMessages_108: string[];
                export { errorMessages_108 as errorMessages };
                const id_290: string;
                export { id_290 as id };
                const label_262: string;
                export { label_262 as label };
            }
            export namespace rent_4 {
                const type_245: string;
                export { type_245 as type };
                const nullable_242: boolean;
                export { nullable_242 as nullable };
                const write_242: boolean;
                export { write_242 as write };
                const read_242: boolean;
                export { read_242 as read };
                const id_291: string;
                export { id_291 as id };
                const label_263: string;
                export { label_263 as label };
            }
            export { rent_4 as rent };
            export namespace landlordContract_2 {
                const targetClass_66: string;
                export { targetClass_66 as targetClass };
                const type_246: string;
                export { type_246 as type };
                const nullable_243: boolean;
                export { nullable_243 as nullable };
                const write_243: boolean;
                export { write_243 as write };
                const read_243: boolean;
                export { read_243 as read };
                export namespace resource_37 {
                    export namespace model_52 {
                        export namespace id_292 {
                            const type_247: string;
                            export { type_247 as type };
                            const nullable_244: boolean;
                            export { nullable_244 as nullable };
                            const write_244: boolean;
                            export { write_244 as write };
                            const read_244: boolean;
                            export { read_244 as read };
                            const validators_109: string[];
                            export { validators_109 as validators };
                            const errorMessages_109: string[];
                            export { errorMessages_109 as errorMessages };
                            const id_293: string;
                            export { id_293 as id };
                            const label_264: string;
                            export { label_264 as label };
                        }
                        export { id_292 as id };
                        export namespace unsignedFile_8 {
                            const type_248: string;
                            export { type_248 as type };
                            const nullable_245: boolean;
                            export { nullable_245 as nullable };
                            const write_245: boolean;
                            export { write_245 as write };
                            const read_245: boolean;
                            export { read_245 as read };
                            const id_294: string;
                            export { id_294 as id };
                            const label_265: string;
                            export { label_265 as label };
                        }
                        export { unsignedFile_8 as unsignedFile };
                        export namespace issuerSignedFile_8 {
                            const type_249: string;
                            export { type_249 as type };
                            const nullable_246: boolean;
                            export { nullable_246 as nullable };
                            const write_246: boolean;
                            export { write_246 as write };
                            const read_246: boolean;
                            export { read_246 as read };
                            const id_295: string;
                            export { id_295 as id };
                            const label_266: string;
                            export { label_266 as label };
                        }
                        export { issuerSignedFile_8 as issuerSignedFile };
                        export namespace beneficiarySignedFile_8 {
                            const type_250: string;
                            export { type_250 as type };
                            const nullable_247: boolean;
                            export { nullable_247 as nullable };
                            const write_247: boolean;
                            export { write_247 as write };
                            const read_247: boolean;
                            export { read_247 as read };
                            const id_296: string;
                            export { id_296 as id };
                            const label_267: string;
                            export { label_267 as label };
                        }
                        export { beneficiarySignedFile_8 as beneficiarySignedFile };
                        export namespace startDate_6 {
                            const type_251: string;
                            export { type_251 as type };
                            const nullable_248: boolean;
                            export { nullable_248 as nullable };
                            const write_248: boolean;
                            export { write_248 as write };
                            const read_248: boolean;
                            export { read_248 as read };
                            const id_297: string;
                            export { id_297 as id };
                            const label_268: string;
                            export { label_268 as label };
                        }
                        export { startDate_6 as startDate };
                        export namespace currentPlace_18 {
                            const type_252: string;
                            export { type_252 as type };
                            const nullable_249: boolean;
                            export { nullable_249 as nullable };
                            const write_249: boolean;
                            export { write_249 as write };
                            const read_249: boolean;
                            export { read_249 as read };
                            const validators_110: string[];
                            export { validators_110 as validators };
                            const errorMessages_110: string[];
                            export { errorMessages_110 as errorMessages };
                            const id_298: string;
                            export { id_298 as id };
                            const label_269: string;
                            export { label_269 as label };
                        }
                        export { currentPlace_18 as currentPlace };
                        export namespace requestedTransition_18 {
                            const type_253: string;
                            export { type_253 as type };
                            const nullable_250: boolean;
                            export { nullable_250 as nullable };
                            const write_250: boolean;
                            export { write_250 as write };
                            const read_250: boolean;
                            export { read_250 as read };
                            const id_299: string;
                            export { id_299 as id };
                            const label_270: string;
                            export { label_270 as label };
                        }
                        export { requestedTransition_18 as requestedTransition };
                        export namespace eligibleTransitions_18 {
                            const id_300: string;
                            export { id_300 as id };
                            const label_271: string;
                            export { label_271 as label };
                        }
                        export { eligibleTransitions_18 as eligibleTransitions };
                    }
                    export { model_52 as model };
                    const title_51: string;
                    export { title_51 as title };
                    const resourceName_88: string;
                    export { resourceName_88 as resourceName };
                }
                export { resource_37 as resource };
                const resourceName_89: string;
                export { resourceName_89 as resourceName };
                const validators_111: string[];
                export { validators_111 as validators };
                const errorMessages_111: string[];
                export { errorMessages_111 as errorMessages };
                const id_301: string;
                export { id_301 as id };
                const label_272: string;
                export { label_272 as label };
            }
            export { landlordContract_2 as landlordContract };
            export namespace id_302 {
                const type_254: string;
                export { type_254 as type };
                const nullable_251: boolean;
                export { nullable_251 as nullable };
                const write_251: boolean;
                export { write_251 as write };
                const read_251: boolean;
                export { read_251 as read };
                const validators_112: string[];
                export { validators_112 as validators };
                const errorMessages_112: string[];
                export { errorMessages_112 as errorMessages };
                const id_303: string;
                export { id_303 as id };
                const label_273: string;
                export { label_273 as label };
            }
            export { id_302 as id };
        }
        export { model_50 as model };
        const title_52: string;
        export { title_52 as title };
        const resourceName_90: string;
        export { resourceName_90 as resourceName };
    }
    export namespace areas {
        export namespace model_53 {
            export namespace id_304 {
                const type_255: string;
                export { type_255 as type };
                const nullable_252: boolean;
                export { nullable_252 as nullable };
                const write_252: boolean;
                export { write_252 as write };
                const read_252: boolean;
                export { read_252 as read };
                const validators_113: string[];
                export { validators_113 as validators };
                const errorMessages_113: string[];
                export { errorMessages_113 as errorMessages };
                const id_305: string;
                export { id_305 as id };
                const label_274: string;
                export { label_274 as label };
            }
            export { id_304 as id };
            export namespace name_4 {
                const type_256: string;
                export { type_256 as type };
                const nullable_253: boolean;
                export { nullable_253 as nullable };
                const write_253: boolean;
                export { write_253 as write };
                const read_253: boolean;
                export { read_253 as read };
                const validators_114: string[];
                export { validators_114 as validators };
                const errorMessages_114: string[];
                export { errorMessages_114 as errorMessages };
                const id_306: string;
                export { id_306 as id };
                const label_275: string;
                export { label_275 as label };
            }
            export { name_4 as name };
            export namespace properties {
                const targetClass_67: string;
                export { targetClass_67 as targetClass };
                const type_257: string;
                export { type_257 as type };
                const nullable_254: boolean;
                export { nullable_254 as nullable };
                const write_254: boolean;
                export { write_254 as write };
                const read_254: boolean;
                export { read_254 as read };
                export namespace resource_38 {
                    export namespace model_54 {
                        export namespace floorplans_1 {
                            const type_258: string;
                            export { type_258 as type };
                            const nullable_255: boolean;
                            export { nullable_255 as nullable };
                            const write_255: boolean;
                            export { write_255 as write };
                            const read_255: boolean;
                            export { read_255 as read };
                            const validators_115: string[];
                            export { validators_115 as validators };
                            const errorMessages_115: string[];
                            export { errorMessages_115 as errorMessages };
                            const id_307: string;
                            export { id_307 as id };
                            const label_276: string;
                            export { label_276 as label };
                        }
                        export { floorplans_1 as floorplans };
                        export namespace images_2 {
                            const type_259: string;
                            export { type_259 as type };
                            const nullable_256: boolean;
                            export { nullable_256 as nullable };
                            const write_256: boolean;
                            export { write_256 as write };
                            const read_256: boolean;
                            export { read_256 as read };
                            const validators_116: string[];
                            export { validators_116 as validators };
                            const errorMessages_116: string[];
                            export { errorMessages_116 as errorMessages };
                            const id_308: string;
                            export { id_308 as id };
                            const label_277: string;
                            export { label_277 as label };
                        }
                        export { images_2 as images };
                        export namespace currentPlace_19 {
                            const targetClass_68: string;
                            export { targetClass_68 as targetClass };
                            const optionsName_29: string;
                            export { optionsName_29 as optionsName };
                            const type_260: string;
                            export { type_260 as type };
                            const nullable_257: boolean;
                            export { nullable_257 as nullable };
                            const write_257: boolean;
                            export { write_257 as write };
                            const read_257: boolean;
                            export { read_257 as read };
                            const options_29: {
                                id: string;
                                label: string;
                            }[];
                            export { options_29 as options };
                            const validators_117: string[];
                            export { validators_117 as validators };
                            const errorMessages_117: string[];
                            export { errorMessages_117 as errorMessages };
                            const id_309: string;
                            export { id_309 as id };
                            const label_278: string;
                            export { label_278 as label };
                        }
                        export { currentPlace_19 as currentPlace };
                        export namespace requestedTransition_19 {
                            const type_261: string;
                            export { type_261 as type };
                            const nullable_258: boolean;
                            export { nullable_258 as nullable };
                            const write_258: boolean;
                            export { write_258 as write };
                            const read_258: boolean;
                            export { read_258 as read };
                            const id_310: string;
                            export { id_310 as id };
                            const label_279: string;
                            export { label_279 as label };
                        }
                        export { requestedTransition_19 as requestedTransition };
                        export namespace eligibleTransitions_19 {
                            const id_311: string;
                            export { id_311 as id };
                            const label_280: string;
                            export { label_280 as label };
                        }
                        export { eligibleTransitions_19 as eligibleTransitions };
                    }
                    export { model_54 as model };
                    const title_53: string;
                    export { title_53 as title };
                    const resourceName_91: string;
                    export { resourceName_91 as resourceName };
                }
                export { resource_38 as resource };
                const resourceName_92: string;
                export { resourceName_92 as resourceName };
                const validators_118: string[];
                export { validators_118 as validators };
                const errorMessages_118: string[];
                export { errorMessages_118 as errorMessages };
                const id_312: string;
                export { id_312 as id };
                const label_281: string;
                export { label_281 as label };
            }
            export namespace city_1 {
                const targetClass_69: string;
                export { targetClass_69 as targetClass };
                const type_262: string;
                export { type_262 as type };
                const nullable_259: boolean;
                export { nullable_259 as nullable };
                const write_259: boolean;
                export { write_259 as write };
                const read_259: boolean;
                export { read_259 as read };
                export namespace resource_39 {
                    export namespace model_55 {
                        export namespace id_313 {
                            const type_263: string;
                            export { type_263 as type };
                            const nullable_260: boolean;
                            export { nullable_260 as nullable };
                            const write_260: boolean;
                            export { write_260 as write };
                            const read_260: boolean;
                            export { read_260 as read };
                            const validators_119: string[];
                            export { validators_119 as validators };
                            const errorMessages_119: string[];
                            export { errorMessages_119 as errorMessages };
                            const id_314: string;
                            export { id_314 as id };
                            const label_282: string;
                            export { label_282 as label };
                        }
                        export { id_313 as id };
                    }
                    export { model_55 as model };
                    const title_54: string;
                    export { title_54 as title };
                    const resourceName_93: string;
                    export { resourceName_93 as resourceName };
                }
                export { resource_39 as resource };
                const resourceName_94: string;
                export { resourceName_94 as resourceName };
                const optionText_21: string;
                export { optionText_21 as optionText };
                const validators_120: string[];
                export { validators_120 as validators };
                const errorMessages_120: string[];
                export { errorMessages_120 as errorMessages };
                const id_315: string;
                export { id_315 as id };
                const label_283: string;
                export { label_283 as label };
            }
            export { city_1 as city };
        }
        export { model_53 as model };
        const title_55: string;
        export { title_55 as title };
        const resourceName_95: string;
        export { resourceName_95 as resourceName };
    }
    export namespace cities {
        export namespace model_56 {
            export namespace id_316 {
                const type_264: string;
                export { type_264 as type };
                const nullable_261: boolean;
                export { nullable_261 as nullable };
                const write_261: boolean;
                export { write_261 as write };
                const read_261: boolean;
                export { read_261 as read };
                const validators_121: string[];
                export { validators_121 as validators };
                const errorMessages_121: string[];
                export { errorMessages_121 as errorMessages };
                const id_317: string;
                export { id_317 as id };
                const label_284: string;
                export { label_284 as label };
            }
            export { id_316 as id };
            export namespace name_5 {
                const type_265: string;
                export { type_265 as type };
                const nullable_262: boolean;
                export { nullable_262 as nullable };
                const write_262: boolean;
                export { write_262 as write };
                const read_262: boolean;
                export { read_262 as read };
                const validators_122: string[];
                export { validators_122 as validators };
                const errorMessages_122: string[];
                export { errorMessages_122 as errorMessages };
                const id_318: string;
                export { id_318 as id };
                const label_285: string;
                export { label_285 as label };
            }
            export { name_5 as name };
        }
        export { model_56 as model };
        const title_56: string;
        export { title_56 as title };
        const resourceName_96: string;
        export { resourceName_96 as resourceName };
    }
    export namespace countries {
        export namespace model_57 {
            export namespace id_319 {
                const type_266: string;
                export { type_266 as type };
                const nullable_263: boolean;
                export { nullable_263 as nullable };
                const write_263: boolean;
                export { write_263 as write };
                const read_263: boolean;
                export { read_263 as read };
                const validators_123: string[];
                export { validators_123 as validators };
                const errorMessages_123: string[];
                export { errorMessages_123 as errorMessages };
                const id_320: string;
                export { id_320 as id };
                const label_286: string;
                export { label_286 as label };
            }
            export { id_319 as id };
            export namespace name_6 {
                const type_267: string;
                export { type_267 as type };
                const nullable_264: boolean;
                export { nullable_264 as nullable };
                const write_264: boolean;
                export { write_264 as write };
                const read_264: boolean;
                export { read_264 as read };
                const validators_124: string[];
                export { validators_124 as validators };
                const errorMessages_124: string[];
                export { errorMessages_124 as errorMessages };
                const id_321: string;
                export { id_321 as id };
                const label_287: string;
                export { label_287 as label };
            }
            export { name_6 as name };
        }
        export { model_57 as model };
        const title_57: string;
        export { title_57 as title };
        const resourceName_97: string;
        export { resourceName_97 as resourceName };
    }
    export namespace counties {
        export namespace model_58 {
            export namespace id_322 {
                const type_268: string;
                export { type_268 as type };
                const nullable_265: boolean;
                export { nullable_265 as nullable };
                const write_265: boolean;
                export { write_265 as write };
                const read_265: boolean;
                export { read_265 as read };
                const validators_125: string[];
                export { validators_125 as validators };
                const errorMessages_125: string[];
                export { errorMessages_125 as errorMessages };
                const id_323: string;
                export { id_323 as id };
                const label_288: string;
                export { label_288 as label };
            }
            export { id_322 as id };
            export namespace name_7 {
                const type_269: string;
                export { type_269 as type };
                const nullable_266: boolean;
                export { nullable_266 as nullable };
                const write_266: boolean;
                export { write_266 as write };
                const read_266: boolean;
                export { read_266 as read };
                const validators_126: string[];
                export { validators_126 as validators };
                const errorMessages_126: string[];
                export { errorMessages_126 as errorMessages };
                const id_324: string;
                export { id_324 as id };
                const label_289: string;
                export { label_289 as label };
            }
            export { name_7 as name };
            export namespace city_2 {
                const targetClass_70: string;
                export { targetClass_70 as targetClass };
                const type_270: string;
                export { type_270 as type };
                const nullable_267: boolean;
                export { nullable_267 as nullable };
                const write_267: boolean;
                export { write_267 as write };
                const read_267: boolean;
                export { read_267 as read };
                export namespace resource_40 {
                    const model_59: never[];
                    export { model_59 as model };
                    const title_58: string;
                    export { title_58 as title };
                    const resourceName_98: string;
                    export { resourceName_98 as resourceName };
                }
                export { resource_40 as resource };
                const resourceName_99: string;
                export { resourceName_99 as resourceName };
                const optionText_22: string;
                export { optionText_22 as optionText };
                const validators_127: string[];
                export { validators_127 as validators };
                const errorMessages_127: string[];
                export { errorMessages_127 as errorMessages };
                const id_325: string;
                export { id_325 as id };
                const label_290: string;
                export { label_290 as label };
            }
            export { city_2 as city };
        }
        export { model_58 as model };
        const title_59: string;
        export { title_59 as title };
        const resourceName_100: string;
        export { resourceName_100 as resourceName };
    }
    export namespace neighborhoods {
        export namespace model_60 {
            export namespace id_326 {
                const type_271: string;
                export { type_271 as type };
                const nullable_268: boolean;
                export { nullable_268 as nullable };
                const write_268: boolean;
                export { write_268 as write };
                const read_268: boolean;
                export { read_268 as read };
                const validators_128: string[];
                export { validators_128 as validators };
                const errorMessages_128: string[];
                export { errorMessages_128 as errorMessages };
                const id_327: string;
                export { id_327 as id };
                const label_291: string;
                export { label_291 as label };
            }
            export { id_326 as id };
            export namespace name_8 {
                const type_272: string;
                export { type_272 as type };
                const nullable_269: boolean;
                export { nullable_269 as nullable };
                const write_269: boolean;
                export { write_269 as write };
                const read_269: boolean;
                export { read_269 as read };
                const validators_129: string[];
                export { validators_129 as validators };
                const errorMessages_129: string[];
                export { errorMessages_129 as errorMessages };
                const id_328: string;
                export { id_328 as id };
                const label_292: string;
                export { label_292 as label };
            }
            export { name_8 as name };
            export namespace city_3 {
                const id_329: string;
                export { id_329 as id };
                const label_293: string;
                export { label_293 as label };
            }
            export { city_3 as city };
        }
        export { model_60 as model };
        const title_60: string;
        export { title_60 as title };
        const resourceName_101: string;
        export { resourceName_101 as resourceName };
    }
    export namespace postcodes {
        export namespace model_61 {
            export namespace id_330 {
                const type_273: string;
                export { type_273 as type };
                const nullable_270: boolean;
                export { nullable_270 as nullable };
                const write_270: boolean;
                export { write_270 as write };
                const read_270: boolean;
                export { read_270 as read };
                const validators_130: string[];
                export { validators_130 as validators };
                const errorMessages_130: string[];
                export { errorMessages_130 as errorMessages };
                const id_331: string;
                export { id_331 as id };
                const label_294: string;
                export { label_294 as label };
            }
            export { id_330 as id };
            export namespace postcode_11 {
                const type_274: string;
                export { type_274 as type };
                const nullable_271: boolean;
                export { nullable_271 as nullable };
                const write_271: boolean;
                export { write_271 as write };
                const read_271: boolean;
                export { read_271 as read };
                const validators_131: string[];
                export { validators_131 as validators };
                const errorMessages_131: string[];
                export { errorMessages_131 as errorMessages };
                const id_332: string;
                export { id_332 as id };
                const label_295: string;
                export { label_295 as label };
            }
            export { postcode_11 as postcode };
            export namespace city_4 {
                const targetClass_71: string;
                export { targetClass_71 as targetClass };
                const type_275: string;
                export { type_275 as type };
                const nullable_272: boolean;
                export { nullable_272 as nullable };
                const write_272: boolean;
                export { write_272 as write };
                const read_272: boolean;
                export { read_272 as read };
                export namespace resource_41 {
                    export namespace model_62 {
                        export namespace id_333 {
                            const type_276: string;
                            export { type_276 as type };
                            const nullable_273: boolean;
                            export { nullable_273 as nullable };
                            const write_273: boolean;
                            export { write_273 as write };
                            const read_273: boolean;
                            export { read_273 as read };
                            const validators_132: string[];
                            export { validators_132 as validators };
                            const errorMessages_132: string[];
                            export { errorMessages_132 as errorMessages };
                            const id_334: string;
                            export { id_334 as id };
                            const label_296: string;
                            export { label_296 as label };
                        }
                        export { id_333 as id };
                        export namespace name_9 {
                            const type_277: string;
                            export { type_277 as type };
                            const nullable_274: boolean;
                            export { nullable_274 as nullable };
                            const write_274: boolean;
                            export { write_274 as write };
                            const read_274: boolean;
                            export { read_274 as read };
                            const validators_133: string[];
                            export { validators_133 as validators };
                            const errorMessages_133: string[];
                            export { errorMessages_133 as errorMessages };
                            const id_335: string;
                            export { id_335 as id };
                            const label_297: string;
                            export { label_297 as label };
                        }
                        export { name_9 as name };
                    }
                    export { model_62 as model };
                    const title_61: string;
                    export { title_61 as title };
                    const resourceName_102: string;
                    export { resourceName_102 as resourceName };
                }
                export { resource_41 as resource };
                const resourceName_103: string;
                export { resourceName_103 as resourceName };
                const optionText_23: string;
                export { optionText_23 as optionText };
                const validators_134: string[];
                export { validators_134 as validators };
                const errorMessages_134: string[];
                export { errorMessages_134 as errorMessages };
                const id_336: string;
                export { id_336 as id };
                const label_298: string;
                export { label_298 as label };
            }
            export { city_4 as city };
        }
        export { model_61 as model };
        const title_62: string;
        export { title_62 as title };
        const resourceName_104: string;
        export { resourceName_104 as resourceName };
    }
    export namespace portals {
        export namespace model_63 {
            export namespace id_337 {
                const type_278: string;
                export { type_278 as type };
                const nullable_275: boolean;
                export { nullable_275 as nullable };
                const write_275: boolean;
                export { write_275 as write };
                const read_275: boolean;
                export { read_275 as read };
                const validators_135: string[];
                export { validators_135 as validators };
                const errorMessages_135: string[];
                export { errorMessages_135 as errorMessages };
                const id_338: string;
                export { id_338 as id };
                const label_299: string;
                export { label_299 as label };
            }
            export { id_337 as id };
            export namespace name_10 {
                const type_279: string;
                export { type_279 as type };
                const nullable_276: boolean;
                export { nullable_276 as nullable };
                const write_276: boolean;
                export { write_276 as write };
                const read_276: boolean;
                export { read_276 as read };
                const validators_136: string[];
                export { validators_136 as validators };
                const errorMessages_136: string[];
                export { errorMessages_136 as errorMessages };
                const id_339: string;
                export { id_339 as id };
                const label_300: string;
                export { label_300 as label };
            }
            export { name_10 as name };
            export namespace discount {
                const type_280: string;
                export { type_280 as type };
                const nullable_277: boolean;
                export { nullable_277 as nullable };
                const write_277: boolean;
                export { write_277 as write };
                const read_277: boolean;
                export { read_277 as read };
                const validators_137: string[];
                export { validators_137 as validators };
                const errorMessages_137: string[];
                export { errorMessages_137 as errorMessages };
                const id_340: string;
                export { id_340 as id };
                const label_301: string;
                export { label_301 as label };
            }
            export namespace url {
                const type_281: string;
                export { type_281 as type };
                const nullable_278: boolean;
                export { nullable_278 as nullable };
                const write_278: boolean;
                export { write_278 as write };
                const read_278: boolean;
                export { read_278 as read };
                const validators_138: string[];
                export { validators_138 as validators };
                const errorMessages_138: string[];
                export { errorMessages_138 as errorMessages };
                const id_341: string;
                export { id_341 as id };
                const label_302: string;
                export { label_302 as label };
            }
            export namespace units_1 {
                const targetClass_72: string;
                export { targetClass_72 as targetClass };
                const type_282: string;
                export { type_282 as type };
                const nullable_279: boolean;
                export { nullable_279 as nullable };
                const write_279: boolean;
                export { write_279 as write };
                const read_279: boolean;
                export { read_279 as read };
                export namespace resource_42 {
                    const model_64: never[];
                    export { model_64 as model };
                    const title_63: string;
                    export { title_63 as title };
                    const resourceName_105: string;
                    export { resourceName_105 as resourceName };
                }
                export { resource_42 as resource };
                const resourceName_106: string;
                export { resourceName_106 as resourceName };
                const optionText_24: string;
                export { optionText_24 as optionText };
                const validators_139: string[];
                export { validators_139 as validators };
                const errorMessages_139: string[];
                export { errorMessages_139 as errorMessages };
                const id_342: string;
                export { id_342 as id };
                const label_303: string;
                export { label_303 as label };
            }
            export { units_1 as units };
        }
        export { model_63 as model };
        const title_64: string;
        export { title_64 as title };
        const resourceName_107: string;
        export { resourceName_107 as resourceName };
    }
    export namespace portal_units {
        export namespace model_65 {
            export namespace id_343 {
                const type_283: string;
                export { type_283 as type };
                const nullable_280: boolean;
                export { nullable_280 as nullable };
                const write_280: boolean;
                export { write_280 as write };
                const read_280: boolean;
                export { read_280 as read };
                const validators_140: string[];
                export { validators_140 as validators };
                const errorMessages_140: string[];
                export { errorMessages_140 as errorMessages };
                const id_344: string;
                export { id_344 as id };
                const label_304: string;
                export { label_304 as label };
            }
            export { id_343 as id };
            export namespace portal {
                const targetClass_73: string;
                export { targetClass_73 as targetClass };
                const type_284: string;
                export { type_284 as type };
                const nullable_281: boolean;
                export { nullable_281 as nullable };
                const write_281: boolean;
                export { write_281 as write };
                const read_281: boolean;
                export { read_281 as read };
                export namespace resource_43 {
                    const model_66: never[];
                    export { model_66 as model };
                    const title_65: string;
                    export { title_65 as title };
                    const resourceName_108: string;
                    export { resourceName_108 as resourceName };
                }
                export { resource_43 as resource };
                const resourceName_109: string;
                export { resourceName_109 as resourceName };
                const optionText_25: string;
                export { optionText_25 as optionText };
                const validators_141: string[];
                export { validators_141 as validators };
                const errorMessages_141: string[];
                export { errorMessages_141 as errorMessages };
                const id_345: string;
                export { id_345 as id };
                const label_305: string;
                export { label_305 as label };
            }
            export namespace unit {
                const targetClass_74: string;
                export { targetClass_74 as targetClass };
                const type_285: string;
                export { type_285 as type };
                const nullable_282: boolean;
                export { nullable_282 as nullable };
                const write_282: boolean;
                export { write_282 as write };
                const read_282: boolean;
                export { read_282 as read };
                export namespace resource_44 {
                    export namespace model_67 {
                        export namespace images_3 {
                            const type_286: string;
                            export { type_286 as type };
                            const nullable_283: boolean;
                            export { nullable_283 as nullable };
                            const write_283: boolean;
                            export { write_283 as write };
                            const read_283: boolean;
                            export { read_283 as read };
                            const validators_142: string[];
                            export { validators_142 as validators };
                            const errorMessages_142: string[];
                            export { errorMessages_142 as errorMessages };
                            const id_346: string;
                            export { id_346 as id };
                            const label_306: string;
                            export { label_306 as label };
                        }
                        export { images_3 as images };
                        export namespace currentPlace_20 {
                            const targetClass_75: string;
                            export { targetClass_75 as targetClass };
                            const optionsName_30: string;
                            export { optionsName_30 as optionsName };
                            const type_287: string;
                            export { type_287 as type };
                            const nullable_284: boolean;
                            export { nullable_284 as nullable };
                            const write_284: boolean;
                            export { write_284 as write };
                            const read_284: boolean;
                            export { read_284 as read };
                            const options_30: {
                                id: string;
                                label: string;
                            }[];
                            export { options_30 as options };
                            const validators_143: string[];
                            export { validators_143 as validators };
                            const errorMessages_143: string[];
                            export { errorMessages_143 as errorMessages };
                            const id_347: string;
                            export { id_347 as id };
                            const label_307: string;
                            export { label_307 as label };
                        }
                        export { currentPlace_20 as currentPlace };
                        export namespace requestedTransition_20 {
                            const type_288: string;
                            export { type_288 as type };
                            const nullable_285: boolean;
                            export { nullable_285 as nullable };
                            const write_285: boolean;
                            export { write_285 as write };
                            const read_285: boolean;
                            export { read_285 as read };
                            const id_348: string;
                            export { id_348 as id };
                            const label_308: string;
                            export { label_308 as label };
                        }
                        export { requestedTransition_20 as requestedTransition };
                        export namespace eligibleTransitions_20 {
                            const id_349: string;
                            export { id_349 as id };
                            const label_309: string;
                            export { label_309 as label };
                        }
                        export { eligibleTransitions_20 as eligibleTransitions };
                    }
                    export { model_67 as model };
                    const title_66: string;
                    export { title_66 as title };
                    const resourceName_110: string;
                    export { resourceName_110 as resourceName };
                }
                export { resource_44 as resource };
                const resourceName_111: string;
                export { resourceName_111 as resourceName };
                const optionText_26: string;
                export { optionText_26 as optionText };
                const validators_144: string[];
                export { validators_144 as validators };
                const errorMessages_144: string[];
                export { errorMessages_144 as errorMessages };
                const id_350: string;
                export { id_350 as id };
                const label_310: string;
                export { label_310 as label };
            }
            export namespace unitDiscount {
                const type_289: string;
                export { type_289 as type };
                const nullable_286: boolean;
                export { nullable_286 as nullable };
                const write_286: boolean;
                export { write_286 as write };
                const read_286: boolean;
                export { read_286 as read };
                const validators_145: string[];
                export { validators_145 as validators };
                const errorMessages_145: string[];
                export { errorMessages_145 as errorMessages };
                const id_351: string;
                export { id_351 as id };
                const label_311: string;
                export { label_311 as label };
            }
        }
        export { model_65 as model };
        const title_67: string;
        export { title_67 as title };
        const resourceName_112: string;
        export { resourceName_112 as resourceName };
    }
    export namespace notifications {
        export namespace model_68 {
            export namespace id_352 {
                const type_290: string;
                export { type_290 as type };
                const nullable_287: boolean;
                export { nullable_287 as nullable };
                const write_287: boolean;
                export { write_287 as write };
                const read_287: boolean;
                export { read_287 as read };
                const validators_146: string[];
                export { validators_146 as validators };
                const errorMessages_146: string[];
                export { errorMessages_146 as errorMessages };
                const id_353: string;
                export { id_353 as id };
                const label_312: string;
                export { label_312 as label };
            }
            export { id_352 as id };
            export namespace url_1 {
                const type_291: string;
                export { type_291 as type };
                const nullable_288: boolean;
                export { nullable_288 as nullable };
                const write_288: boolean;
                export { write_288 as write };
                const read_288: boolean;
                export { read_288 as read };
                const validators_147: string[];
                export { validators_147 as validators };
                const errorMessages_147: string[];
                export { errorMessages_147 as errorMessages };
                const id_354: string;
                export { id_354 as id };
                const label_313: string;
                export { label_313 as label };
            }
            export { url_1 as url };
            export namespace subject {
                const type_292: string;
                export { type_292 as type };
                const nullable_289: boolean;
                export { nullable_289 as nullable };
                const write_289: boolean;
                export { write_289 as write };
                const read_289: boolean;
                export { read_289 as read };
                const validators_148: string[];
                export { validators_148 as validators };
                const errorMessages_148: string[];
                export { errorMessages_148 as errorMessages };
                const id_355: string;
                export { id_355 as id };
                const label_314: string;
                export { label_314 as label };
            }
            export namespace text_1 {
                const type_293: string;
                export { type_293 as type };
                const nullable_290: boolean;
                export { nullable_290 as nullable };
                const write_290: boolean;
                export { write_290 as write };
                const read_290: boolean;
                export { read_290 as read };
                const validators_149: string[];
                export { validators_149 as validators };
                const errorMessages_149: string[];
                export { errorMessages_149 as errorMessages };
                const id_356: string;
                export { id_356 as id };
                const label_315: string;
                export { label_315 as label };
            }
            export { text_1 as text };
            export namespace sentAt {
                const type_294: string;
                export { type_294 as type };
                const nullable_291: boolean;
                export { nullable_291 as nullable };
                const write_291: boolean;
                export { write_291 as write };
                const read_291: boolean;
                export { read_291 as read };
                const validators_150: string[];
                export { validators_150 as validators };
                const errorMessages_150: string[];
                export { errorMessages_150 as errorMessages };
                const id_357: string;
                export { id_357 as id };
                const label_316: string;
                export { label_316 as label };
            }
            export namespace users {
                const id_358: string;
                export { id_358 as id };
                const label_317: string;
                export { label_317 as label };
            }
            export namespace path {
                const type_295: string;
                export { type_295 as type };
                const nullable_292: boolean;
                export { nullable_292 as nullable };
                const write_292: boolean;
                export { write_292 as write };
                const read_292: boolean;
                export { read_292 as read };
                const validators_151: string[];
                export { validators_151 as validators };
                const errorMessages_151: string[];
                export { errorMessages_151 as errorMessages };
                const id_359: string;
                export { id_359 as id };
                const label_318: string;
                export { label_318 as label };
            }
        }
        export { model_68 as model };
        const title_68: string;
        export { title_68 as title };
        const resourceName_113: string;
        export { resourceName_113 as resourceName };
    }
    export namespace notification_users {
        export namespace model_69 {
            export namespace id_360 {
                const type_296: string;
                export { type_296 as type };
                const nullable_293: boolean;
                export { nullable_293 as nullable };
                const write_293: boolean;
                export { write_293 as write };
                const read_293: boolean;
                export { read_293 as read };
                const validators_152: string[];
                export { validators_152 as validators };
                const errorMessages_152: string[];
                export { errorMessages_152 as errorMessages };
                const id_361: string;
                export { id_361 as id };
                const label_319: string;
                export { label_319 as label };
            }
            export { id_360 as id };
            export namespace readAt {
                const type_297: string;
                export { type_297 as type };
                const nullable_294: boolean;
                export { nullable_294 as nullable };
                const write_294: boolean;
                export { write_294 as write };
                const read_294: boolean;
                export { read_294 as read };
                const validators_153: string[];
                export { validators_153 as validators };
                const errorMessages_153: string[];
                export { errorMessages_153 as errorMessages };
                const id_362: string;
                export { id_362 as id };
                const label_320: string;
                export { label_320 as label };
            }
            export namespace notification {
                const targetClass_76: string;
                export { targetClass_76 as targetClass };
                const type_298: string;
                export { type_298 as type };
                const nullable_295: boolean;
                export { nullable_295 as nullable };
                const write_295: boolean;
                export { write_295 as write };
                const read_295: boolean;
                export { read_295 as read };
                export namespace resource_45 {
                    export namespace model_70 {
                        export namespace id_363 {
                            const type_299: string;
                            export { type_299 as type };
                            const nullable_296: boolean;
                            export { nullable_296 as nullable };
                            const write_296: boolean;
                            export { write_296 as write };
                            const read_296: boolean;
                            export { read_296 as read };
                            const validators_154: string[];
                            export { validators_154 as validators };
                            const errorMessages_154: string[];
                            export { errorMessages_154 as errorMessages };
                            const id_364: string;
                            export { id_364 as id };
                            const label_321: string;
                            export { label_321 as label };
                        }
                        export { id_363 as id };
                        export namespace url_2 {
                            const type_300: string;
                            export { type_300 as type };
                            const nullable_297: boolean;
                            export { nullable_297 as nullable };
                            const write_297: boolean;
                            export { write_297 as write };
                            const read_297: boolean;
                            export { read_297 as read };
                            const validators_155: string[];
                            export { validators_155 as validators };
                            const errorMessages_155: string[];
                            export { errorMessages_155 as errorMessages };
                            const id_365: string;
                            export { id_365 as id };
                            const label_322: string;
                            export { label_322 as label };
                        }
                        export { url_2 as url };
                        export namespace subject_1 {
                            const type_301: string;
                            export { type_301 as type };
                            const nullable_298: boolean;
                            export { nullable_298 as nullable };
                            const write_298: boolean;
                            export { write_298 as write };
                            const read_298: boolean;
                            export { read_298 as read };
                            const validators_156: string[];
                            export { validators_156 as validators };
                            const errorMessages_156: string[];
                            export { errorMessages_156 as errorMessages };
                            const id_366: string;
                            export { id_366 as id };
                            const label_323: string;
                            export { label_323 as label };
                        }
                        export { subject_1 as subject };
                        export namespace text_2 {
                            const type_302: string;
                            export { type_302 as type };
                            const nullable_299: boolean;
                            export { nullable_299 as nullable };
                            const write_299: boolean;
                            export { write_299 as write };
                            const read_299: boolean;
                            export { read_299 as read };
                            const validators_157: string[];
                            export { validators_157 as validators };
                            const errorMessages_157: string[];
                            export { errorMessages_157 as errorMessages };
                            const id_367: string;
                            export { id_367 as id };
                            const label_324: string;
                            export { label_324 as label };
                        }
                        export { text_2 as text };
                        export namespace sentAt_1 {
                            const type_303: string;
                            export { type_303 as type };
                            const nullable_300: boolean;
                            export { nullable_300 as nullable };
                            const write_300: boolean;
                            export { write_300 as write };
                            const read_300: boolean;
                            export { read_300 as read };
                            const validators_158: string[];
                            export { validators_158 as validators };
                            const errorMessages_158: string[];
                            export { errorMessages_158 as errorMessages };
                            const id_368: string;
                            export { id_368 as id };
                            const label_325: string;
                            export { label_325 as label };
                        }
                        export { sentAt_1 as sentAt };
                        export namespace path_1 {
                            const type_304: string;
                            export { type_304 as type };
                            const nullable_301: boolean;
                            export { nullable_301 as nullable };
                            const write_301: boolean;
                            export { write_301 as write };
                            const read_301: boolean;
                            export { read_301 as read };
                            const validators_159: string[];
                            export { validators_159 as validators };
                            const errorMessages_159: string[];
                            export { errorMessages_159 as errorMessages };
                            const id_369: string;
                            export { id_369 as id };
                            const label_326: string;
                            export { label_326 as label };
                        }
                        export { path_1 as path };
                    }
                    export { model_70 as model };
                    const title_69: string;
                    export { title_69 as title };
                    const resourceName_114: string;
                    export { resourceName_114 as resourceName };
                }
                export { resource_45 as resource };
                const resourceName_115: string;
                export { resourceName_115 as resourceName };
                const optionText_27: string;
                export { optionText_27 as optionText };
                const validators_160: string[];
                export { validators_160 as validators };
                const errorMessages_160: string[];
                export { errorMessages_160 as errorMessages };
                const id_370: string;
                export { id_370 as id };
                const label_327: string;
                export { label_327 as label };
            }
        }
        export { model_69 as model };
        const title_70: string;
        export { title_70 as title };
        const resourceName_116: string;
        export { resourceName_116 as resourceName };
    }
    export namespace additional_payment_item_fields {
        export namespace model_71 {
            export namespace id_371 {
                const type_305: string;
                export { type_305 as type };
                const nullable_302: boolean;
                export { nullable_302 as nullable };
                const write_302: boolean;
                export { write_302 as write };
                const read_302: boolean;
                export { read_302 as read };
                const validators_161: string[];
                export { validators_161 as validators };
                const errorMessages_161: string[];
                export { errorMessages_161 as errorMessages };
                const id_372: string;
                export { id_372 as id };
                const label_328: string;
                export { label_328 as label };
            }
            export { id_371 as id };
            export namespace name_11 {
                const type_306: string;
                export { type_306 as type };
                const nullable_303: boolean;
                export { nullable_303 as nullable };
                const write_303: boolean;
                export { write_303 as write };
                const read_303: boolean;
                export { read_303 as read };
                const id_373: string;
                export { id_373 as id };
                const label_329: string;
                export { label_329 as label };
            }
            export { name_11 as name };
            export namespace optionText_28 {
                const type_307: string;
                export { type_307 as type };
                const nullable_304: boolean;
                export { nullable_304 as nullable };
                const write_304: boolean;
                export { write_304 as write };
                const read_304: boolean;
                export { read_304 as read };
                const id_374: string;
                export { id_374 as id };
                const label_330: string;
                export { label_330 as label };
            }
            export { optionText_28 as optionText };
        }
        export { model_71 as model };
        const title_71: string;
        export { title_71 as title };
        const resourceName_117: string;
        export { resourceName_117 as resourceName };
    }
    export namespace deduction {
        export namespace model_72 {
            export namespace landlordTenancy {
                const targetClass_77: string;
                export { targetClass_77 as targetClass };
                const type_308: string;
                export { type_308 as type };
                const nullable_305: boolean;
                export { nullable_305 as nullable };
                const write_305: boolean;
                export { write_305 as write };
                const read_305: boolean;
                export { read_305 as read };
                export namespace resource_46 {
                    export namespace model_73 {
                        export namespace currentPlace_21 {
                            const targetClass_78: string;
                            export { targetClass_78 as targetClass };
                            const optionsName_31: string;
                            export { optionsName_31 as optionsName };
                            const type_309: string;
                            export { type_309 as type };
                            const nullable_306: boolean;
                            export { nullable_306 as nullable };
                            const write_306: boolean;
                            export { write_306 as write };
                            const read_306: boolean;
                            export { read_306 as read };
                            const options_31: {
                                id: string;
                                label: string;
                            }[];
                            export { options_31 as options };
                            const validators_162: string[];
                            export { validators_162 as validators };
                            const errorMessages_162: string[];
                            export { errorMessages_162 as errorMessages };
                            const id_375: string;
                            export { id_375 as id };
                            const label_331: string;
                            export { label_331 as label };
                        }
                        export { currentPlace_21 as currentPlace };
                        export namespace requestedTransition_21 {
                            const type_310: string;
                            export { type_310 as type };
                            const nullable_307: boolean;
                            export { nullable_307 as nullable };
                            const write_307: boolean;
                            export { write_307 as write };
                            const read_307: boolean;
                            export { read_307 as read };
                            const id_376: string;
                            export { id_376 as id };
                            const label_332: string;
                            export { label_332 as label };
                        }
                        export { requestedTransition_21 as requestedTransition };
                        export namespace eligibleTransitions_21 {
                            const id_377: string;
                            export { id_377 as id };
                            const label_333: string;
                            export { label_333 as label };
                        }
                        export { eligibleTransitions_21 as eligibleTransitions };
                    }
                    export { model_73 as model };
                    const title_72: string;
                    export { title_72 as title };
                    const resourceName_118: string;
                    export { resourceName_118 as resourceName };
                }
                export { resource_46 as resource };
                const resourceName_119: string;
                export { resourceName_119 as resourceName };
                const optionText_29: string;
                export { optionText_29 as optionText };
                const validators_163: string[];
                export { validators_163 as validators };
                const errorMessages_163: string[];
                export { errorMessages_163 as errorMessages };
                const id_378: string;
                export { id_378 as id };
                const label_334: string;
                export { label_334 as label };
            }
            export namespace fromDate {
                const type_311: string;
                export { type_311 as type };
                const nullable_308: boolean;
                export { nullable_308 as nullable };
                const write_308: boolean;
                export { write_308 as write };
                const read_308: boolean;
                export { read_308 as read };
                const validators_164: string[];
                export { validators_164 as validators };
                const errorMessages_164: string[];
                export { errorMessages_164 as errorMessages };
                const id_379: string;
                export { id_379 as id };
                const label_335: string;
                export { label_335 as label };
            }
            export namespace toDate {
                const type_312: string;
                export { type_312 as type };
                const nullable_309: boolean;
                export { nullable_309 as nullable };
                const write_309: boolean;
                export { write_309 as write };
                const read_309: boolean;
                export { read_309 as read };
                const validators_165: string[];
                export { validators_165 as validators };
                const errorMessages_165: string[];
                export { errorMessages_165 as errorMessages };
                const id_380: string;
                export { id_380 as id };
                const label_336: string;
                export { label_336 as label };
            }
            export namespace discount_1 {
                const type_313: string;
                export { type_313 as type };
                const nullable_310: boolean;
                export { nullable_310 as nullable };
                const write_310: boolean;
                export { write_310 as write };
                const read_310: boolean;
                export { read_310 as read };
                const validators_166: string[];
                export { validators_166 as validators };
                const errorMessages_166: string[];
                export { errorMessages_166 as errorMessages };
                const id_381: string;
                export { id_381 as id };
                const label_337: string;
                export { label_337 as label };
            }
            export { discount_1 as discount };
        }
        export { model_72 as model };
        const title_73: string;
        export { title_73 as title };
        const resourceName_120: string;
        export { resourceName_120 as resourceName };
    }
    export namespace default_payment_items {
        export namespace model_74 {
            export namespace id_382 {
                const type_314: string;
                export { type_314 as type };
                const nullable_311: boolean;
                export { nullable_311 as nullable };
                const write_311: boolean;
                export { write_311 as write };
                const read_311: boolean;
                export { read_311 as read };
                const validators_167: string[];
                export { validators_167 as validators };
                const errorMessages_167: string[];
                export { errorMessages_167 as errorMessages };
                const id_383: string;
                export { id_383 as id };
                const label_338: string;
                export { label_338 as label };
            }
            export { id_382 as id };
            export namespace name_12 {
                const type_315: string;
                export { type_315 as type };
                const nullable_312: boolean;
                export { nullable_312 as nullable };
                const write_312: boolean;
                export { write_312 as write };
                const read_312: boolean;
                export { read_312 as read };
                const id_384: string;
                export { id_384 as id };
                const label_339: string;
                export { label_339 as label };
            }
            export { name_12 as name };
            export namespace fee_4 {
                const type_316: string;
                export { type_316 as type };
                const nullable_313: boolean;
                export { nullable_313 as nullable };
                const write_313: boolean;
                export { write_313 as write };
                const read_313: boolean;
                export { read_313 as read };
                const id_385: string;
                export { id_385 as id };
                const label_340: string;
                export { label_340 as label };
            }
            export { fee_4 as fee };
            export namespace category {
                const targetClass_79: string;
                export { targetClass_79 as targetClass };
                const optionsName_32: string;
                export { optionsName_32 as optionsName };
                const type_317: string;
                export { type_317 as type };
                const nullable_314: boolean;
                export { nullable_314 as nullable };
                const write_314: boolean;
                export { write_314 as write };
                const read_314: boolean;
                export { read_314 as read };
                const options_32: {
                    id: number;
                    label: string;
                }[];
                export { options_32 as options };
                const validators_168: string[];
                export { validators_168 as validators };
                const errorMessages_168: string[];
                export { errorMessages_168 as errorMessages };
                const id_386: string;
                export { id_386 as id };
                const label_341: string;
                export { label_341 as label };
            }
            export namespace type_318 {
                const targetClass_80: string;
                export { targetClass_80 as targetClass };
                const optionsName_33: string;
                export { optionsName_33 as optionsName };
                const type_319: string;
                export { type_319 as type };
                const nullable_315: boolean;
                export { nullable_315 as nullable };
                const write_315: boolean;
                export { write_315 as write };
                const read_315: boolean;
                export { read_315 as read };
                const options_33: {
                    id: number;
                    label: string;
                }[];
                export { options_33 as options };
                const validators_169: string[];
                export { validators_169 as validators };
                const errorMessages_169: string[];
                export { errorMessages_169 as errorMessages };
                const id_387: string;
                export { id_387 as id };
                const label_342: string;
                export { label_342 as label };
            }
            export { type_318 as type };
        }
        export { model_74 as model };
        const title_74: string;
        export { title_74 as title };
        const resourceName_121: string;
        export { resourceName_121 as resourceName };
    }
    export namespace payments_3 {
        export namespace model_75 {
            export namespace id_388 {
                const type_320: string;
                export { type_320 as type };
                const nullable_316: boolean;
                export { nullable_316 as nullable };
                const write_316: boolean;
                export { write_316 as write };
                const read_316: boolean;
                export { read_316 as read };
                const validators_170: string[];
                export { validators_170 as validators };
                const errorMessages_170: string[];
                export { errorMessages_170 as errorMessages };
                const id_389: string;
                export { id_389 as id };
                const label_343: string;
                export { label_343 as label };
            }
            export { id_388 as id };
            export namespace fee_5 {
                const type_321: string;
                export { type_321 as type };
                const nullable_317: boolean;
                export { nullable_317 as nullable };
                const write_317: boolean;
                export { write_317 as write };
                const read_317: boolean;
                export { read_317 as read };
                const id_390: string;
                export { id_390 as id };
                const label_344: string;
                export { label_344 as label };
            }
            export { fee_5 as fee };
            export namespace dueDate_1 {
                const type_322: string;
                export { type_322 as type };
                const nullable_318: boolean;
                export { nullable_318 as nullable };
                const write_318: boolean;
                export { write_318 as write };
                const read_318: boolean;
                export { read_318 as read };
                const id_391: string;
                export { id_391 as id };
                const label_345: string;
                export { label_345 as label };
            }
            export { dueDate_1 as dueDate };
            export namespace status_1 {
                const targetClass_81: string;
                export { targetClass_81 as targetClass };
                const optionsName_34: string;
                export { optionsName_34 as optionsName };
                const type_323: string;
                export { type_323 as type };
                const nullable_319: boolean;
                export { nullable_319 as nullable };
                const write_319: boolean;
                export { write_319 as write };
                const read_319: boolean;
                export { read_319 as read };
                const options_34: {
                    id: number;
                    label: string;
                }[];
                export { options_34 as options };
                const validators_171: string[];
                export { validators_171 as validators };
                const errorMessages_171: string[];
                export { errorMessages_171 as errorMessages };
                const id_392: string;
                export { id_392 as id };
                const label_346: string;
                export { label_346 as label };
            }
            export { status_1 as status };
            export namespace type_324 {
                const targetClass_82: string;
                export { targetClass_82 as targetClass };
                const optionsName_35: string;
                export { optionsName_35 as optionsName };
                const type_325: string;
                export { type_325 as type };
                const nullable_320: boolean;
                export { nullable_320 as nullable };
                const write_320: boolean;
                export { write_320 as write };
                const read_320: boolean;
                export { read_320 as read };
                const options_35: {
                    id: number;
                    label: string;
                }[];
                export { options_35 as options };
                const validators_172: string[];
                export { validators_172 as validators };
                const errorMessages_172: string[];
                export { errorMessages_172 as errorMessages };
                const id_393: string;
                export { id_393 as id };
                const label_347: string;
                export { label_347 as label };
            }
            export { type_324 as type };
            export namespace xeroInvoiceId {
                const type_326: string;
                export { type_326 as type };
                const nullable_321: boolean;
                export { nullable_321 as nullable };
                const write_321: boolean;
                export { write_321 as write };
                const read_321: boolean;
                export { read_321 as read };
                const id_394: string;
                export { id_394 as id };
                const label_348: string;
                export { label_348 as label };
            }
            export namespace paymentItems {
                const targetClass_83: string;
                export { targetClass_83 as targetClass };
                const type_327: string;
                export { type_327 as type };
                const nullable_322: boolean;
                export { nullable_322 as nullable };
                const write_322: boolean;
                export { write_322 as write };
                const read_322: boolean;
                export { read_322 as read };
                export namespace resource_47 {
                    export namespace model_76 {
                        export namespace id_395 {
                            const type_328: string;
                            export { type_328 as type };
                            const nullable_323: boolean;
                            export { nullable_323 as nullable };
                            const write_323: boolean;
                            export { write_323 as write };
                            const read_323: boolean;
                            export { read_323 as read };
                            const validators_173: string[];
                            export { validators_173 as validators };
                            const errorMessages_173: string[];
                            export { errorMessages_173 as errorMessages };
                            const id_396: string;
                            export { id_396 as id };
                            const label_349: string;
                            export { label_349 as label };
                        }
                        export { id_395 as id };
                        export namespace description_1 {
                            const type_329: string;
                            export { type_329 as type };
                            const nullable_324: boolean;
                            export { nullable_324 as nullable };
                            const write_324: boolean;
                            export { write_324 as write };
                            const read_324: boolean;
                            export { read_324 as read };
                            const id_397: string;
                            export { id_397 as id };
                            const label_350: string;
                            export { label_350 as label };
                        }
                        export { description_1 as description };
                        export namespace quantity {
                            const id_398: string;
                            export { id_398 as id };
                            const label_351: string;
                            export { label_351 as label };
                        }
                        export namespace unitAmount {
                            const type_330: string;
                            export { type_330 as type };
                            const nullable_325: boolean;
                            export { nullable_325 as nullable };
                            const write_325: boolean;
                            export { write_325 as write };
                            const read_325: boolean;
                            export { read_325 as read };
                            const id_399: string;
                            export { id_399 as id };
                            const label_352: string;
                            export { label_352 as label };
                        }
                        export namespace lineItemId {
                            const type_331: string;
                            export { type_331 as type };
                            const nullable_326: boolean;
                            export { nullable_326 as nullable };
                            const write_326: boolean;
                            export { write_326 as write };
                            const read_326: boolean;
                            export { read_326 as read };
                            const id_400: string;
                            export { id_400 as id };
                            const label_353: string;
                            export { label_353 as label };
                        }
                        export namespace taxType {
                            const type_332: string;
                            export { type_332 as type };
                            const nullable_327: boolean;
                            export { nullable_327 as nullable };
                            const write_327: boolean;
                            export { write_327 as write };
                            const read_327: boolean;
                            export { read_327 as read };
                            const id_401: string;
                            export { id_401 as id };
                            const label_354: string;
                            export { label_354 as label };
                        }
                        export namespace taxAmount {
                            const type_333: string;
                            export { type_333 as type };
                            const nullable_328: boolean;
                            export { nullable_328 as nullable };
                            const write_328: boolean;
                            export { write_328 as write };
                            const read_328: boolean;
                            export { read_328 as read };
                            const id_402: string;
                            export { id_402 as id };
                            const label_355: string;
                            export { label_355 as label };
                        }
                        export namespace discountRate {
                            const type_334: string;
                            export { type_334 as type };
                            const nullable_329: boolean;
                            export { nullable_329 as nullable };
                            const write_329: boolean;
                            export { write_329 as write };
                            const read_329: boolean;
                            export { read_329 as read };
                            const id_403: string;
                            export { id_403 as id };
                            const label_356: string;
                            export { label_356 as label };
                        }
                        export namespace additionalPaymentItemFields {
                            const targetClass_84: string;
                            export { targetClass_84 as targetClass };
                            const type_335: string;
                            export { type_335 as type };
                            const nullable_330: boolean;
                            export { nullable_330 as nullable };
                            const write_330: boolean;
                            export { write_330 as write };
                            const read_330: boolean;
                            export { read_330 as read };
                            export namespace resource_48 {
                                export namespace model_77 {
                                    export namespace id_404 {
                                        const type_336: string;
                                        export { type_336 as type };
                                        const nullable_331: boolean;
                                        export { nullable_331 as nullable };
                                        const write_331: boolean;
                                        export { write_331 as write };
                                        const read_331: boolean;
                                        export { read_331 as read };
                                        const validators_174: string[];
                                        export { validators_174 as validators };
                                        const errorMessages_174: string[];
                                        export { errorMessages_174 as errorMessages };
                                        const id_405: string;
                                        export { id_405 as id };
                                        const label_357: string;
                                        export { label_357 as label };
                                    }
                                    export { id_404 as id };
                                    export namespace name_13 {
                                        const type_337: string;
                                        export { type_337 as type };
                                        const nullable_332: boolean;
                                        export { nullable_332 as nullable };
                                        const write_332: boolean;
                                        export { write_332 as write };
                                        const read_332: boolean;
                                        export { read_332 as read };
                                        const id_406: string;
                                        export { id_406 as id };
                                        const label_358: string;
                                        export { label_358 as label };
                                    }
                                    export { name_13 as name };
                                    export namespace optionText_30 {
                                        const type_338: string;
                                        export { type_338 as type };
                                        const nullable_333: boolean;
                                        export { nullable_333 as nullable };
                                        const write_333: boolean;
                                        export { write_333 as write };
                                        const read_333: boolean;
                                        export { read_333 as read };
                                        const id_407: string;
                                        export { id_407 as id };
                                        const label_359: string;
                                        export { label_359 as label };
                                    }
                                    export { optionText_30 as optionText };
                                }
                                export { model_77 as model };
                                const title_75: string;
                                export { title_75 as title };
                                const resourceName_122: string;
                                export { resourceName_122 as resourceName };
                            }
                            export { resource_48 as resource };
                            const resourceName_123: string;
                            export { resourceName_123 as resourceName };
                            const validators_175: string[];
                            export { validators_175 as validators };
                            const errorMessages_175: string[];
                            export { errorMessages_175 as errorMessages };
                            const id_408: string;
                            export { id_408 as id };
                            const label_360: string;
                            export { label_360 as label };
                        }
                        export namespace paymentItemCategory {
                            const targetClass_85: string;
                            export { targetClass_85 as targetClass };
                            const type_339: string;
                            export { type_339 as type };
                            const nullable_334: boolean;
                            export { nullable_334 as nullable };
                            const write_334: boolean;
                            export { write_334 as write };
                            const read_334: boolean;
                            export { read_334 as read };
                            export namespace resource_49 {
                                const model_78: never[];
                                export { model_78 as model };
                                const title_76: string;
                                export { title_76 as title };
                                const resourceName_124: string;
                                export { resourceName_124 as resourceName };
                            }
                            export { resource_49 as resource };
                            const resourceName_125: string;
                            export { resourceName_125 as resourceName };
                            const optionText_31: string;
                            export { optionText_31 as optionText };
                            const id_409: string;
                            export { id_409 as id };
                            const label_361: string;
                            export { label_361 as label };
                        }
                    }
                    export { model_76 as model };
                    const title_77: string;
                    export { title_77 as title };
                    const resourceName_126: string;
                    export { resourceName_126 as resourceName };
                }
                export { resource_47 as resource };
                const resourceName_127: string;
                export { resourceName_127 as resourceName };
                const validators_176: string[];
                export { validators_176 as validators };
                const errorMessages_176: string[];
                export { errorMessages_176 as errorMessages };
                const id_410: string;
                export { id_410 as id };
                const label_362: string;
                export { label_362 as label };
            }
            export namespace payableAmount {
                const type_340: string;
                export { type_340 as type };
                const nullable_335: boolean;
                export { nullable_335 as nullable };
                const write_335: boolean;
                export { write_335 as write };
                const read_335: boolean;
                export { read_335 as read };
                const id_411: string;
                export { id_411 as id };
                const label_363: string;
                export { label_363 as label };
            }
        }
        export { model_75 as model };
        const title_78: string;
        export { title_78 as title };
        const resourceName_128: string;
        export { resourceName_128 as resourceName };
    }
    export { payments_3 as payments };
    export namespace payment_items {
        export namespace model_79 {
            export namespace id_412 {
                const type_341: string;
                export { type_341 as type };
                const nullable_336: boolean;
                export { nullable_336 as nullable };
                const write_336: boolean;
                export { write_336 as write };
                const read_336: boolean;
                export { read_336 as read };
                const validators_177: string[];
                export { validators_177 as validators };
                const errorMessages_177: string[];
                export { errorMessages_177 as errorMessages };
                const id_413: string;
                export { id_413 as id };
                const label_364: string;
                export { label_364 as label };
            }
            export { id_412 as id };
            export namespace description_2 {
                const type_342: string;
                export { type_342 as type };
                const nullable_337: boolean;
                export { nullable_337 as nullable };
                const write_337: boolean;
                export { write_337 as write };
                const read_337: boolean;
                export { read_337 as read };
                const id_414: string;
                export { id_414 as id };
                const label_365: string;
                export { label_365 as label };
            }
            export { description_2 as description };
            export namespace quantity_1 {
                const id_415: string;
                export { id_415 as id };
                const label_366: string;
                export { label_366 as label };
            }
            export { quantity_1 as quantity };
            export namespace unitAmount_1 {
                const type_343: string;
                export { type_343 as type };
                const nullable_338: boolean;
                export { nullable_338 as nullable };
                const write_338: boolean;
                export { write_338 as write };
                const read_338: boolean;
                export { read_338 as read };
                const id_416: string;
                export { id_416 as id };
                const label_367: string;
                export { label_367 as label };
            }
            export { unitAmount_1 as unitAmount };
            export namespace lineItemId_1 {
                const type_344: string;
                export { type_344 as type };
                const nullable_339: boolean;
                export { nullable_339 as nullable };
                const write_339: boolean;
                export { write_339 as write };
                const read_339: boolean;
                export { read_339 as read };
                const id_417: string;
                export { id_417 as id };
                const label_368: string;
                export { label_368 as label };
            }
            export { lineItemId_1 as lineItemId };
            export namespace taxType_1 {
                const type_345: string;
                export { type_345 as type };
                const nullable_340: boolean;
                export { nullable_340 as nullable };
                const write_340: boolean;
                export { write_340 as write };
                const read_340: boolean;
                export { read_340 as read };
                const id_418: string;
                export { id_418 as id };
                const label_369: string;
                export { label_369 as label };
            }
            export { taxType_1 as taxType };
            export namespace taxAmount_1 {
                const type_346: string;
                export { type_346 as type };
                const nullable_341: boolean;
                export { nullable_341 as nullable };
                const write_341: boolean;
                export { write_341 as write };
                const read_341: boolean;
                export { read_341 as read };
                const id_419: string;
                export { id_419 as id };
                const label_370: string;
                export { label_370 as label };
            }
            export { taxAmount_1 as taxAmount };
            export namespace discountRate_1 {
                const type_347: string;
                export { type_347 as type };
                const nullable_342: boolean;
                export { nullable_342 as nullable };
                const write_342: boolean;
                export { write_342 as write };
                const read_342: boolean;
                export { read_342 as read };
                const id_420: string;
                export { id_420 as id };
                const label_371: string;
                export { label_371 as label };
            }
            export { discountRate_1 as discountRate };
            export namespace additionalPaymentItemFields_1 {
                const targetClass_86: string;
                export { targetClass_86 as targetClass };
                const type_348: string;
                export { type_348 as type };
                const nullable_343: boolean;
                export { nullable_343 as nullable };
                const write_343: boolean;
                export { write_343 as write };
                const read_343: boolean;
                export { read_343 as read };
                export namespace resource_50 {
                    export namespace model_80 {
                        export namespace id_421 {
                            const type_349: string;
                            export { type_349 as type };
                            const nullable_344: boolean;
                            export { nullable_344 as nullable };
                            const write_344: boolean;
                            export { write_344 as write };
                            const read_344: boolean;
                            export { read_344 as read };
                            const validators_178: string[];
                            export { validators_178 as validators };
                            const errorMessages_178: string[];
                            export { errorMessages_178 as errorMessages };
                            const id_422: string;
                            export { id_422 as id };
                            const label_372: string;
                            export { label_372 as label };
                        }
                        export { id_421 as id };
                        export namespace name_14 {
                            const type_350: string;
                            export { type_350 as type };
                            const nullable_345: boolean;
                            export { nullable_345 as nullable };
                            const write_345: boolean;
                            export { write_345 as write };
                            const read_345: boolean;
                            export { read_345 as read };
                            const id_423: string;
                            export { id_423 as id };
                            const label_373: string;
                            export { label_373 as label };
                        }
                        export { name_14 as name };
                        export namespace optionText_32 {
                            const type_351: string;
                            export { type_351 as type };
                            const nullable_346: boolean;
                            export { nullable_346 as nullable };
                            const write_346: boolean;
                            export { write_346 as write };
                            const read_346: boolean;
                            export { read_346 as read };
                            const id_424: string;
                            export { id_424 as id };
                            const label_374: string;
                            export { label_374 as label };
                        }
                        export { optionText_32 as optionText };
                    }
                    export { model_80 as model };
                    const title_79: string;
                    export { title_79 as title };
                    const resourceName_129: string;
                    export { resourceName_129 as resourceName };
                }
                export { resource_50 as resource };
                const resourceName_130: string;
                export { resourceName_130 as resourceName };
                const validators_179: string[];
                export { validators_179 as validators };
                const errorMessages_179: string[];
                export { errorMessages_179 as errorMessages };
                const id_425: string;
                export { id_425 as id };
                const label_375: string;
                export { label_375 as label };
            }
            export { additionalPaymentItemFields_1 as additionalPaymentItemFields };
            export namespace payment {
                const targetClass_87: string;
                export { targetClass_87 as targetClass };
                const type_352: string;
                export { type_352 as type };
                const nullable_347: boolean;
                export { nullable_347 as nullable };
                const write_347: boolean;
                export { write_347 as write };
                const read_347: boolean;
                export { read_347 as read };
                export namespace resource_51 {
                    const model_81: never[];
                    export { model_81 as model };
                    const title_80: string;
                    export { title_80 as title };
                    const resourceName_131: string;
                    export { resourceName_131 as resourceName };
                }
                export { resource_51 as resource };
                const resourceName_132: string;
                export { resourceName_132 as resourceName };
                const optionText_33: string;
                export { optionText_33 as optionText };
                const validators_180: string[];
                export { validators_180 as validators };
                const errorMessages_180: string[];
                export { errorMessages_180 as errorMessages };
                const id_426: string;
                export { id_426 as id };
                const label_376: string;
                export { label_376 as label };
            }
            export namespace paymentItemCategory_1 {
                const targetClass_88: string;
                export { targetClass_88 as targetClass };
                const type_353: string;
                export { type_353 as type };
                const nullable_348: boolean;
                export { nullable_348 as nullable };
                const write_348: boolean;
                export { write_348 as write };
                const read_348: boolean;
                export { read_348 as read };
                export namespace resource_52 {
                    const model_82: never[];
                    export { model_82 as model };
                    const title_81: string;
                    export { title_81 as title };
                    const resourceName_133: string;
                    export { resourceName_133 as resourceName };
                }
                export { resource_52 as resource };
                const resourceName_134: string;
                export { resourceName_134 as resourceName };
                const optionText_34: string;
                export { optionText_34 as optionText };
                const id_427: string;
                export { id_427 as id };
                const label_377: string;
                export { label_377 as label };
            }
            export { paymentItemCategory_1 as paymentItemCategory };
        }
        export { model_79 as model };
        const title_82: string;
        export { title_82 as title };
        const resourceName_135: string;
        export { resourceName_135 as resourceName };
    }
    export namespace payment_item_categories {
        export namespace model_83 {
            export namespace id_428 {
                const type_354: string;
                export { type_354 as type };
                const nullable_349: boolean;
                export { nullable_349 as nullable };
                const write_349: boolean;
                export { write_349 as write };
                const read_349: boolean;
                export { read_349 as read };
                const validators_181: string[];
                export { validators_181 as validators };
                const errorMessages_181: string[];
                export { errorMessages_181 as errorMessages };
                const id_429: string;
                export { id_429 as id };
                const label_378: string;
                export { label_378 as label };
            }
            export { id_428 as id };
            export namespace description_3 {
                const type_355: string;
                export { type_355 as type };
                const nullable_350: boolean;
                export { nullable_350 as nullable };
                const write_350: boolean;
                export { write_350 as write };
                const read_350: boolean;
                export { read_350 as read };
                const id_430: string;
                export { id_430 as id };
                const label_379: string;
                export { label_379 as label };
            }
            export { description_3 as description };
            export namespace code_1 {
                const type_356: string;
                export { type_356 as type };
                const nullable_351: boolean;
                export { nullable_351 as nullable };
                const write_351: boolean;
                export { write_351 as write };
                const read_351: boolean;
                export { read_351 as read };
                const id_431: string;
                export { id_431 as id };
                const label_380: string;
                export { label_380 as label };
            }
            export { code_1 as code };
        }
        export { model_83 as model };
        const title_83: string;
        export { title_83 as title };
        const resourceName_136: string;
        export { resourceName_136 as resourceName };
    }
    export namespace landlord_tenancy_payments {
        export namespace model_84 {
            export namespace landlordContract_3 {
                const targetClass_89: string;
                export { targetClass_89 as targetClass };
                const type_357: string;
                export { type_357 as type };
                const nullable_352: boolean;
                export { nullable_352 as nullable };
                const write_352: boolean;
                export { write_352 as write };
                const read_352: boolean;
                export { read_352 as read };
                export namespace resource_53 {
                    export namespace model_85 {
                        export namespace witnessSignedFile_3 {
                            const type_358: string;
                            export { type_358 as type };
                            const nullable_353: boolean;
                            export { nullable_353 as nullable };
                            const write_353: boolean;
                            export { write_353 as write };
                            const read_353: boolean;
                            export { read_353 as read };
                            const validators_182: string[];
                            export { validators_182 as validators };
                            const errorMessages_182: string[];
                            export { errorMessages_182 as errorMessages };
                            const id_432: string;
                            export { id_432 as id };
                            const label_381: string;
                            export { label_381 as label };
                        }
                        export { witnessSignedFile_3 as witnessSignedFile };
                        export namespace currentPlace_22 {
                            const targetClass_90: string;
                            export { targetClass_90 as targetClass };
                            const optionsName_36: string;
                            export { optionsName_36 as optionsName };
                            const type_359: string;
                            export { type_359 as type };
                            const nullable_354: boolean;
                            export { nullable_354 as nullable };
                            const write_354: boolean;
                            export { write_354 as write };
                            const read_354: boolean;
                            export { read_354 as read };
                            const options_36: {
                                id: string;
                                label: string;
                            }[];
                            export { options_36 as options };
                            const validators_183: string[];
                            export { validators_183 as validators };
                            const errorMessages_183: string[];
                            export { errorMessages_183 as errorMessages };
                            const id_433: string;
                            export { id_433 as id };
                            const label_382: string;
                            export { label_382 as label };
                        }
                        export { currentPlace_22 as currentPlace };
                        export namespace unsignedFile_9 {
                            const type_360: string;
                            export { type_360 as type };
                            const nullable_355: boolean;
                            export { nullable_355 as nullable };
                            const write_355: boolean;
                            export { write_355 as write };
                            const read_355: boolean;
                            export { read_355 as read };
                            const id_434: string;
                            export { id_434 as id };
                            const label_383: string;
                            export { label_383 as label };
                        }
                        export { unsignedFile_9 as unsignedFile };
                        export namespace issuerSignedFile_9 {
                            const type_361: string;
                            export { type_361 as type };
                            const nullable_356: boolean;
                            export { nullable_356 as nullable };
                            const write_356: boolean;
                            export { write_356 as write };
                            const read_356: boolean;
                            export { read_356 as read };
                            const id_435: string;
                            export { id_435 as id };
                            const label_384: string;
                            export { label_384 as label };
                        }
                        export { issuerSignedFile_9 as issuerSignedFile };
                        export namespace beneficiarySignedFile_9 {
                            const type_362: string;
                            export { type_362 as type };
                            const nullable_357: boolean;
                            export { nullable_357 as nullable };
                            const write_357: boolean;
                            export { write_357 as write };
                            const read_357: boolean;
                            export { read_357 as read };
                            const id_436: string;
                            export { id_436 as id };
                            const label_385: string;
                            export { label_385 as label };
                        }
                        export { beneficiarySignedFile_9 as beneficiarySignedFile };
                        export namespace requestedTransition_22 {
                            const type_363: string;
                            export { type_363 as type };
                            const nullable_358: boolean;
                            export { nullable_358 as nullable };
                            const write_358: boolean;
                            export { write_358 as write };
                            const read_358: boolean;
                            export { read_358 as read };
                            const id_437: string;
                            export { id_437 as id };
                            const label_386: string;
                            export { label_386 as label };
                        }
                        export { requestedTransition_22 as requestedTransition };
                        export namespace eligibleTransitions_22 {
                            const id_438: string;
                            export { id_438 as id };
                            const label_387: string;
                            export { label_387 as label };
                        }
                        export { eligibleTransitions_22 as eligibleTransitions };
                    }
                    export { model_85 as model };
                    const title_84: string;
                    export { title_84 as title };
                    const resourceName_137: string;
                    export { resourceName_137 as resourceName };
                }
                export { resource_53 as resource };
                const resourceName_138: string;
                export { resourceName_138 as resourceName };
                const optionText_35: string;
                export { optionText_35 as optionText };
                const validators_184: string[];
                export { validators_184 as validators };
                const errorMessages_184: string[];
                export { errorMessages_184 as errorMessages };
                const id_439: string;
                export { id_439 as id };
                const label_388: string;
                export { label_388 as label };
            }
            export { landlordContract_3 as landlordContract };
            export namespace id_440 {
                const type_364: string;
                export { type_364 as type };
                const nullable_359: boolean;
                export { nullable_359 as nullable };
                const write_359: boolean;
                export { write_359 as write };
                const read_359: boolean;
                export { read_359 as read };
                const validators_185: string[];
                export { validators_185 as validators };
                const errorMessages_185: string[];
                export { errorMessages_185 as errorMessages };
                const id_441: string;
                export { id_441 as id };
                const label_389: string;
                export { label_389 as label };
            }
            export { id_440 as id };
            export namespace fee_6 {
                const type_365: string;
                export { type_365 as type };
                const nullable_360: boolean;
                export { nullable_360 as nullable };
                const write_360: boolean;
                export { write_360 as write };
                const read_360: boolean;
                export { read_360 as read };
                const id_442: string;
                export { id_442 as id };
                const label_390: string;
                export { label_390 as label };
            }
            export { fee_6 as fee };
            export namespace dueDate_2 {
                const type_366: string;
                export { type_366 as type };
                const nullable_361: boolean;
                export { nullable_361 as nullable };
                const write_361: boolean;
                export { write_361 as write };
                const read_361: boolean;
                export { read_361 as read };
                const id_443: string;
                export { id_443 as id };
                const label_391: string;
                export { label_391 as label };
            }
            export { dueDate_2 as dueDate };
            export namespace status_2 {
                const targetClass_91: string;
                export { targetClass_91 as targetClass };
                const optionsName_37: string;
                export { optionsName_37 as optionsName };
                const type_367: string;
                export { type_367 as type };
                const nullable_362: boolean;
                export { nullable_362 as nullable };
                const write_362: boolean;
                export { write_362 as write };
                const read_362: boolean;
                export { read_362 as read };
                const options_37: {
                    id: number;
                    label: string;
                }[];
                export { options_37 as options };
                const validators_186: string[];
                export { validators_186 as validators };
                const errorMessages_186: string[];
                export { errorMessages_186 as errorMessages };
                const id_444: string;
                export { id_444 as id };
                const label_392: string;
                export { label_392 as label };
            }
            export { status_2 as status };
            export namespace type_368 {
                const targetClass_92: string;
                export { targetClass_92 as targetClass };
                const optionsName_38: string;
                export { optionsName_38 as optionsName };
                const type_369: string;
                export { type_369 as type };
                const nullable_363: boolean;
                export { nullable_363 as nullable };
                const write_363: boolean;
                export { write_363 as write };
                const read_363: boolean;
                export { read_363 as read };
                const options_38: {
                    id: number;
                    label: string;
                }[];
                export { options_38 as options };
                const validators_187: string[];
                export { validators_187 as validators };
                const errorMessages_187: string[];
                export { errorMessages_187 as errorMessages };
                const id_445: string;
                export { id_445 as id };
                const label_393: string;
                export { label_393 as label };
            }
            export { type_368 as type };
            export namespace xeroInvoiceId_1 {
                const type_370: string;
                export { type_370 as type };
                const nullable_364: boolean;
                export { nullable_364 as nullable };
                const write_364: boolean;
                export { write_364 as write };
                const read_364: boolean;
                export { read_364 as read };
                const id_446: string;
                export { id_446 as id };
                const label_394: string;
                export { label_394 as label };
            }
            export { xeroInvoiceId_1 as xeroInvoiceId };
            export namespace paymentItems_1 {
                const targetClass_93: string;
                export { targetClass_93 as targetClass };
                const type_371: string;
                export { type_371 as type };
                const nullable_365: boolean;
                export { nullable_365 as nullable };
                const write_365: boolean;
                export { write_365 as write };
                const read_365: boolean;
                export { read_365 as read };
                export namespace resource_54 {
                    export namespace model_86 {
                        export namespace id_447 {
                            const type_372: string;
                            export { type_372 as type };
                            const nullable_366: boolean;
                            export { nullable_366 as nullable };
                            const write_366: boolean;
                            export { write_366 as write };
                            const read_366: boolean;
                            export { read_366 as read };
                            const validators_188: string[];
                            export { validators_188 as validators };
                            const errorMessages_188: string[];
                            export { errorMessages_188 as errorMessages };
                            const id_448: string;
                            export { id_448 as id };
                            const label_395: string;
                            export { label_395 as label };
                        }
                        export { id_447 as id };
                        export namespace description_4 {
                            const type_373: string;
                            export { type_373 as type };
                            const nullable_367: boolean;
                            export { nullable_367 as nullable };
                            const write_367: boolean;
                            export { write_367 as write };
                            const read_367: boolean;
                            export { read_367 as read };
                            const id_449: string;
                            export { id_449 as id };
                            const label_396: string;
                            export { label_396 as label };
                        }
                        export { description_4 as description };
                        export namespace quantity_2 {
                            const id_450: string;
                            export { id_450 as id };
                            const label_397: string;
                            export { label_397 as label };
                        }
                        export { quantity_2 as quantity };
                        export namespace unitAmount_2 {
                            const type_374: string;
                            export { type_374 as type };
                            const nullable_368: boolean;
                            export { nullable_368 as nullable };
                            const write_368: boolean;
                            export { write_368 as write };
                            const read_368: boolean;
                            export { read_368 as read };
                            const id_451: string;
                            export { id_451 as id };
                            const label_398: string;
                            export { label_398 as label };
                        }
                        export { unitAmount_2 as unitAmount };
                        export namespace lineItemId_2 {
                            const type_375: string;
                            export { type_375 as type };
                            const nullable_369: boolean;
                            export { nullable_369 as nullable };
                            const write_369: boolean;
                            export { write_369 as write };
                            const read_369: boolean;
                            export { read_369 as read };
                            const id_452: string;
                            export { id_452 as id };
                            const label_399: string;
                            export { label_399 as label };
                        }
                        export { lineItemId_2 as lineItemId };
                        export namespace taxType_2 {
                            const type_376: string;
                            export { type_376 as type };
                            const nullable_370: boolean;
                            export { nullable_370 as nullable };
                            const write_370: boolean;
                            export { write_370 as write };
                            const read_370: boolean;
                            export { read_370 as read };
                            const id_453: string;
                            export { id_453 as id };
                            const label_400: string;
                            export { label_400 as label };
                        }
                        export { taxType_2 as taxType };
                        export namespace taxAmount_2 {
                            const type_377: string;
                            export { type_377 as type };
                            const nullable_371: boolean;
                            export { nullable_371 as nullable };
                            const write_371: boolean;
                            export { write_371 as write };
                            const read_371: boolean;
                            export { read_371 as read };
                            const id_454: string;
                            export { id_454 as id };
                            const label_401: string;
                            export { label_401 as label };
                        }
                        export { taxAmount_2 as taxAmount };
                        export namespace discountRate_2 {
                            const type_378: string;
                            export { type_378 as type };
                            const nullable_372: boolean;
                            export { nullable_372 as nullable };
                            const write_372: boolean;
                            export { write_372 as write };
                            const read_372: boolean;
                            export { read_372 as read };
                            const id_455: string;
                            export { id_455 as id };
                            const label_402: string;
                            export { label_402 as label };
                        }
                        export { discountRate_2 as discountRate };
                        export namespace paymentItemCategory_2 {
                            const targetClass_94: string;
                            export { targetClass_94 as targetClass };
                            const type_379: string;
                            export { type_379 as type };
                            const nullable_373: boolean;
                            export { nullable_373 as nullable };
                            const write_373: boolean;
                            export { write_373 as write };
                            const read_373: boolean;
                            export { read_373 as read };
                            export namespace resource_55 {
                                const model_87: never[];
                                export { model_87 as model };
                                const title_85: string;
                                export { title_85 as title };
                                const resourceName_139: string;
                                export { resourceName_139 as resourceName };
                            }
                            export { resource_55 as resource };
                            const resourceName_140: string;
                            export { resourceName_140 as resourceName };
                            const optionText_36: string;
                            export { optionText_36 as optionText };
                            const id_456: string;
                            export { id_456 as id };
                            const label_403: string;
                            export { label_403 as label };
                        }
                        export { paymentItemCategory_2 as paymentItemCategory };
                    }
                    export { model_86 as model };
                    const title_86: string;
                    export { title_86 as title };
                    const resourceName_141: string;
                    export { resourceName_141 as resourceName };
                }
                export { resource_54 as resource };
                const resourceName_142: string;
                export { resourceName_142 as resourceName };
                const validators_189: string[];
                export { validators_189 as validators };
                const errorMessages_189: string[];
                export { errorMessages_189 as errorMessages };
                const id_457: string;
                export { id_457 as id };
                const label_404: string;
                export { label_404 as label };
            }
            export { paymentItems_1 as paymentItems };
            export namespace payableAmount_1 {
                const type_380: string;
                export { type_380 as type };
                const nullable_374: boolean;
                export { nullable_374 as nullable };
                const write_374: boolean;
                export { write_374 as write };
                const read_374: boolean;
                export { read_374 as read };
                const id_458: string;
                export { id_458 as id };
                const label_405: string;
                export { label_405 as label };
            }
            export { payableAmount_1 as payableAmount };
        }
        export { model_84 as model };
        const title_87: string;
        export { title_87 as title };
        const resourceName_143: string;
        export { resourceName_143 as resourceName };
    }
    export namespace tenant_tenancy_payments {
        export namespace model_88 {
            namespace tenantContract {
                const targetClass_95: string;
                export { targetClass_95 as targetClass };
                const type_381: string;
                export { type_381 as type };
                const nullable_375: boolean;
                export { nullable_375 as nullable };
                const write_375: boolean;
                export { write_375 as write };
                const read_375: boolean;
                export { read_375 as read };
                export namespace resource_56 {
                    export namespace model_89 {
                        export namespace witnessSignedFile_4 {
                            const type_382: string;
                            export { type_382 as type };
                            const nullable_376: boolean;
                            export { nullable_376 as nullable };
                            const write_376: boolean;
                            export { write_376 as write };
                            const read_376: boolean;
                            export { read_376 as read };
                            const validators_190: string[];
                            export { validators_190 as validators };
                            const errorMessages_190: string[];
                            export { errorMessages_190 as errorMessages };
                            const id_459: string;
                            export { id_459 as id };
                            const label_406: string;
                            export { label_406 as label };
                        }
                        export { witnessSignedFile_4 as witnessSignedFile };
                        export namespace unsignedFile_10 {
                            const type_383: string;
                            export { type_383 as type };
                            const nullable_377: boolean;
                            export { nullable_377 as nullable };
                            const write_377: boolean;
                            export { write_377 as write };
                            const read_377: boolean;
                            export { read_377 as read };
                            const id_460: string;
                            export { id_460 as id };
                            const label_407: string;
                            export { label_407 as label };
                        }
                        export { unsignedFile_10 as unsignedFile };
                        export namespace issuerSignedFile_10 {
                            const type_384: string;
                            export { type_384 as type };
                            const nullable_378: boolean;
                            export { nullable_378 as nullable };
                            const write_378: boolean;
                            export { write_378 as write };
                            const read_378: boolean;
                            export { read_378 as read };
                            const id_461: string;
                            export { id_461 as id };
                            const label_408: string;
                            export { label_408 as label };
                        }
                        export { issuerSignedFile_10 as issuerSignedFile };
                        export namespace beneficiarySignedFile_10 {
                            const type_385: string;
                            export { type_385 as type };
                            const nullable_379: boolean;
                            export { nullable_379 as nullable };
                            const write_379: boolean;
                            export { write_379 as write };
                            const read_379: boolean;
                            export { read_379 as read };
                            const id_462: string;
                            export { id_462 as id };
                            const label_409: string;
                            export { label_409 as label };
                        }
                        export { beneficiarySignedFile_10 as beneficiarySignedFile };
                    }
                    export { model_89 as model };
                    const title_88: string;
                    export { title_88 as title };
                    const resourceName_144: string;
                    export { resourceName_144 as resourceName };
                }
                export { resource_56 as resource };
                const resourceName_145: string;
                export { resourceName_145 as resourceName };
                const optionText_37: string;
                export { optionText_37 as optionText };
                const validators_191: string[];
                export { validators_191 as validators };
                const errorMessages_191: string[];
                export { errorMessages_191 as errorMessages };
                const id_463: string;
                export { id_463 as id };
                const label_410: string;
                export { label_410 as label };
            }
        }
        export { model_88 as model };
        const title_89: string;
        export { title_89 as title };
        const resourceName_146: string;
        export { resourceName_146 as resourceName };
    }
    export namespace personal_datas {
        export namespace model_90 {
            export namespace id_464 {
                const type_386: string;
                export { type_386 as type };
                const nullable_380: boolean;
                export { nullable_380 as nullable };
                const write_380: boolean;
                export { write_380 as write };
                const read_380: boolean;
                export { read_380 as read };
                const validators_192: string[];
                export { validators_192 as validators };
                const errorMessages_192: string[];
                export { errorMessages_192 as errorMessages };
                const id_465: string;
                export { id_465 as id };
                const label_411: string;
                export { label_411 as label };
            }
            export { id_464 as id };
            export namespace name_15 {
                const type_387: string;
                export { type_387 as type };
                const nullable_381: boolean;
                export { nullable_381 as nullable };
                const write_381: boolean;
                export { write_381 as write };
                const read_381: boolean;
                export { read_381 as read };
                const id_466: string;
                export { id_466 as id };
                const label_412: string;
                export { label_412 as label };
            }
            export { name_15 as name };
            export namespace surname_4 {
                const type_388: string;
                export { type_388 as type };
                const nullable_382: boolean;
                export { nullable_382 as nullable };
                const write_382: boolean;
                export { write_382 as write };
                const read_382: boolean;
                export { read_382 as read };
                const id_467: string;
                export { id_467 as id };
                const label_413: string;
                export { label_413 as label };
            }
            export { surname_4 as surname };
            export namespace address1_4 {
                const type_389: string;
                export { type_389 as type };
                const nullable_383: boolean;
                export { nullable_383 as nullable };
                const write_383: boolean;
                export { write_383 as write };
                const read_383: boolean;
                export { read_383 as read };
                const id_468: string;
                export { id_468 as id };
                const label_414: string;
                export { label_414 as label };
            }
            export { address1_4 as address1 };
            export namespace address2_3 {
                const type_390: string;
                export { type_390 as type };
                const nullable_384: boolean;
                export { nullable_384 as nullable };
                const write_384: boolean;
                export { write_384 as write };
                const read_384: boolean;
                export { read_384 as read };
                const id_469: string;
                export { id_469 as id };
                const label_415: string;
                export { label_415 as label };
            }
            export { address2_3 as address2 };
            export namespace postcode_12 {
                const targetClass_96: string;
                export { targetClass_96 as targetClass };
                const type_391: string;
                export { type_391 as type };
                const nullable_385: boolean;
                export { nullable_385 as nullable };
                const write_385: boolean;
                export { write_385 as write };
                const read_385: boolean;
                export { read_385 as read };
                export namespace resource_57 {
                    export namespace model_91 {
                        export namespace id_470 {
                            const type_392: string;
                            export { type_392 as type };
                            const nullable_386: boolean;
                            export { nullable_386 as nullable };
                            const write_386: boolean;
                            export { write_386 as write };
                            const read_386: boolean;
                            export { read_386 as read };
                            const validators_193: string[];
                            export { validators_193 as validators };
                            const errorMessages_193: string[];
                            export { errorMessages_193 as errorMessages };
                            const id_471: string;
                            export { id_471 as id };
                            const label_416: string;
                            export { label_416 as label };
                        }
                        export { id_470 as id };
                        export namespace postcode_13 {
                            const type_393: string;
                            export { type_393 as type };
                            const nullable_387: boolean;
                            export { nullable_387 as nullable };
                            const write_387: boolean;
                            export { write_387 as write };
                            const read_387: boolean;
                            export { read_387 as read };
                            const validators_194: string[];
                            export { validators_194 as validators };
                            const errorMessages_194: string[];
                            export { errorMessages_194 as errorMessages };
                            const id_472: string;
                            export { id_472 as id };
                            const label_417: string;
                            export { label_417 as label };
                        }
                        export { postcode_13 as postcode };
                    }
                    export { model_91 as model };
                    const title_90: string;
                    export { title_90 as title };
                    const resourceName_147: string;
                    export { resourceName_147 as resourceName };
                }
                export { resource_57 as resource };
                const resourceName_148: string;
                export { resourceName_148 as resourceName };
                const optionText_38: string;
                export { optionText_38 as optionText };
                const id_473: string;
                export { id_473 as id };
                const label_418: string;
                export { label_418 as label };
            }
            export { postcode_12 as postcode };
            export namespace postcode2_4 {
                const targetClass_97: string;
                export { targetClass_97 as targetClass };
                const type_394: string;
                export { type_394 as type };
                const nullable_388: boolean;
                export { nullable_388 as nullable };
                const write_388: boolean;
                export { write_388 as write };
                const read_388: boolean;
                export { read_388 as read };
                export namespace resource_58 {
                    export namespace model_92 {
                        export namespace id_474 {
                            const type_395: string;
                            export { type_395 as type };
                            const nullable_389: boolean;
                            export { nullable_389 as nullable };
                            const write_389: boolean;
                            export { write_389 as write };
                            const read_389: boolean;
                            export { read_389 as read };
                            const validators_195: string[];
                            export { validators_195 as validators };
                            const errorMessages_195: string[];
                            export { errorMessages_195 as errorMessages };
                            const id_475: string;
                            export { id_475 as id };
                            const label_419: string;
                            export { label_419 as label };
                        }
                        export { id_474 as id };
                        export namespace postcode_14 {
                            const type_396: string;
                            export { type_396 as type };
                            const nullable_390: boolean;
                            export { nullable_390 as nullable };
                            const write_390: boolean;
                            export { write_390 as write };
                            const read_390: boolean;
                            export { read_390 as read };
                            const validators_196: string[];
                            export { validators_196 as validators };
                            const errorMessages_196: string[];
                            export { errorMessages_196 as errorMessages };
                            const id_476: string;
                            export { id_476 as id };
                            const label_420: string;
                            export { label_420 as label };
                        }
                        export { postcode_14 as postcode };
                    }
                    export { model_92 as model };
                    const title_91: string;
                    export { title_91 as title };
                    const resourceName_149: string;
                    export { resourceName_149 as resourceName };
                }
                export { resource_58 as resource };
                const resourceName_150: string;
                export { resourceName_150 as resourceName };
                const optionText_39: string;
                export { optionText_39 as optionText };
                const id_477: string;
                export { id_477 as id };
                const label_421: string;
                export { label_421 as label };
            }
            export { postcode2_4 as postcode2 };
            export namespace email_4 {
                const type_397: string;
                export { type_397 as type };
                const nullable_391: boolean;
                export { nullable_391 as nullable };
                const write_391: boolean;
                export { write_391 as write };
                const read_391: boolean;
                export { read_391 as read };
                const id_478: string;
                export { id_478 as id };
                const label_422: string;
                export { label_422 as label };
            }
            export { email_4 as email };
            export namespace telephone_4 {
                const type_398: string;
                export { type_398 as type };
                const nullable_392: boolean;
                export { nullable_392 as nullable };
                const write_392: boolean;
                export { write_392 as write };
                const read_392: boolean;
                export { read_392 as read };
                const id_479: string;
                export { id_479 as id };
                const label_423: string;
                export { label_423 as label };
            }
            export { telephone_4 as telephone };
            export namespace mobile_4 {
                const type_399: string;
                export { type_399 as type };
                const nullable_393: boolean;
                export { nullable_393 as nullable };
                const write_393: boolean;
                export { write_393 as write };
                const read_393: boolean;
                export { read_393 as read };
                const id_480: string;
                export { id_480 as id };
                const label_424: string;
                export { label_424 as label };
            }
            export { mobile_4 as mobile };
            export namespace nino_4 {
                const type_400: string;
                export { type_400 as type };
                const nullable_394: boolean;
                export { nullable_394 as nullable };
                const write_394: boolean;
                export { write_394 as write };
                const read_394: boolean;
                export { read_394 as read };
                const id_481: string;
                export { id_481 as id };
                const label_425: string;
                export { label_425 as label };
            }
            export { nino_4 as nino };
        }
        export { model_90 as model };
        const title_92: string;
        export { title_92 as title };
        const resourceName_151: string;
        export { resourceName_151 as resourceName };
    }
    export namespace kitchens {
        export namespace model_93 {
            export namespace id_482 {
                const type_401: string;
                export { type_401 as type };
                const nullable_395: boolean;
                export { nullable_395 as nullable };
                const write_395: boolean;
                export { write_395 as write };
                const read_395: boolean;
                export { read_395 as read };
                const validators_197: string[];
                export { validators_197 as validators };
                const errorMessages_197: string[];
                export { errorMessages_197 as errorMessages };
                const id_483: string;
                export { id_483 as id };
                const label_426: string;
                export { label_426 as label };
            }
            export { id_482 as id };
            export namespace diningArea {
                const type_402: string;
                export { type_402 as type };
                const nullable_396: boolean;
                export { nullable_396 as nullable };
                const write_396: boolean;
                export { write_396 as write };
                const read_396: boolean;
                export { read_396 as read };
                const validators_198: string[];
                export { validators_198 as validators };
                const errorMessages_198: string[];
                export { errorMessages_198 as errorMessages };
                const id_484: string;
                export { id_484 as id };
                const label_427: string;
                export { label_427 as label };
            }
            export namespace washingMachine {
                const type_403: string;
                export { type_403 as type };
                const nullable_397: boolean;
                export { nullable_397 as nullable };
                const write_397: boolean;
                export { write_397 as write };
                const read_397: boolean;
                export { read_397 as read };
                const validators_199: string[];
                export { validators_199 as validators };
                const errorMessages_199: string[];
                export { errorMessages_199 as errorMessages };
                const id_485: string;
                export { id_485 as id };
                const label_428: string;
                export { label_428 as label };
            }
            export namespace tumbleDryer {
                const type_404: string;
                export { type_404 as type };
                const nullable_398: boolean;
                export { nullable_398 as nullable };
                const write_398: boolean;
                export { write_398 as write };
                const read_398: boolean;
                export { read_398 as read };
                const validators_200: string[];
                export { validators_200 as validators };
                const errorMessages_200: string[];
                export { errorMessages_200 as errorMessages };
                const id_486: string;
                export { id_486 as id };
                const label_429: string;
                export { label_429 as label };
            }
            export namespace microwave {
                const type_405: string;
                export { type_405 as type };
                const nullable_399: boolean;
                export { nullable_399 as nullable };
                const write_399: boolean;
                export { write_399 as write };
                const read_399: boolean;
                export { read_399 as read };
                const validators_201: string[];
                export { validators_201 as validators };
                const errorMessages_201: string[];
                export { errorMessages_201 as errorMessages };
                const id_487: string;
                export { id_487 as id };
                const label_430: string;
                export { label_430 as label };
            }
            export namespace dishwasher {
                const type_406: string;
                export { type_406 as type };
                const nullable_400: boolean;
                export { nullable_400 as nullable };
                const write_400: boolean;
                export { write_400 as write };
                const read_400: boolean;
                export { read_400 as read };
                const validators_202: string[];
                export { validators_202 as validators };
                const errorMessages_202: string[];
                export { errorMessages_202 as errorMessages };
                const id_488: string;
                export { id_488 as id };
                const label_431: string;
                export { label_431 as label };
            }
        }
        export { model_93 as model };
        const title_93: string;
        export { title_93 as title };
        const resourceName_152: string;
        export { resourceName_152 as resourceName };
    }
    export namespace living_rooms {
        export namespace model_94 {
            namespace sofa {
                const type_407: string;
                export { type_407 as type };
                const nullable_401: boolean;
                export { nullable_401 as nullable };
                const write_401: boolean;
                export { write_401 as write };
                const read_401: boolean;
                export { read_401 as read };
                const validators_203: string[];
                export { validators_203 as validators };
                const errorMessages_203: string[];
                export { errorMessages_203 as errorMessages };
                const id_489: string;
                export { id_489 as id };
                const label_432: string;
                export { label_432 as label };
            }
        }
        export { model_94 as model };
        const title_94: string;
        export { title_94 as title };
        const resourceName_153: string;
        export { resourceName_153 as resourceName };
    }
    export namespace properties_1 {
        export namespace filters_1 {
            const text_3: string[];
            export { text_3 as text };
            const _enum: string[];
            export { _enum as enum };
            export const boolean: string[];
        }
        export { filters_1 as filters };
        export namespace model_95 {
            export namespace id_490 {
                const type_408: string;
                export { type_408 as type };
                const nullable_402: boolean;
                export { nullable_402 as nullable };
                const write_402: boolean;
                export { write_402 as write };
                const read_402: boolean;
                export { read_402 as read };
                const validators_204: string[];
                export { validators_204 as validators };
                const errorMessages_204: string[];
                export { errorMessages_204 as errorMessages };
                const id_491: string;
                export { id_491 as id };
                const label_433: string;
                export { label_433 as label };
            }
            export { id_490 as id };
            export namespace service {
                const type_409: string;
                export { type_409 as type };
                const nullable_403: boolean;
                export { nullable_403 as nullable };
                const write_403: boolean;
                export { write_403 as write };
                const read_403: boolean;
                export { read_403 as read };
                const id_492: string;
                export { id_492 as id };
                const label_434: string;
                export { label_434 as label };
            }
            export namespace hmo {
                const type_410: string;
                export { type_410 as type };
                const nullable_404: boolean;
                export { nullable_404 as nullable };
                const write_404: boolean;
                export { write_404 as write };
                const read_404: boolean;
                export { read_404 as read };
                const validators_205: string[];
                export { validators_205 as validators };
                const errorMessages_205: string[];
                export { errorMessages_205 as errorMessages };
                const id_493: string;
                export { id_493 as id };
                const label_435: string;
                export { label_435 as label };
            }
            export namespace type_411 {
                const targetClass_98: string;
                export { targetClass_98 as targetClass };
                const type_412: string;
                export { type_412 as type };
                const nullable_405: boolean;
                export { nullable_405 as nullable };
                const write_405: boolean;
                export { write_405 as write };
                const read_405: boolean;
                export { read_405 as read };
                export namespace resource_59 {
                    export namespace model_96 {
                        export namespace id_494 {
                            const type_413: string;
                            export { type_413 as type };
                            const nullable_406: boolean;
                            export { nullable_406 as nullable };
                            const write_406: boolean;
                            export { write_406 as write };
                            const read_406: boolean;
                            export { read_406 as read };
                            const validators_206: string[];
                            export { validators_206 as validators };
                            const errorMessages_206: string[];
                            export { errorMessages_206 as errorMessages };
                            const id_495: string;
                            export { id_495 as id };
                            const label_436: string;
                            export { label_436 as label };
                        }
                        export { id_494 as id };
                        export namespace description_5 {
                            const type_414: string;
                            export { type_414 as type };
                            const nullable_407: boolean;
                            export { nullable_407 as nullable };
                            const write_407: boolean;
                            export { write_407 as write };
                            const read_407: boolean;
                            export { read_407 as read };
                            const validators_207: string[];
                            export { validators_207 as validators };
                            const errorMessages_207: string[];
                            export { errorMessages_207 as errorMessages };
                            const id_496: string;
                            export { id_496 as id };
                            const label_437: string;
                            export { label_437 as label };
                        }
                        export { description_5 as description };
                    }
                    export { model_96 as model };
                    const title_95: string;
                    export { title_95 as title };
                    const resourceName_154: string;
                    export { resourceName_154 as resourceName };
                }
                export { resource_59 as resource };
                const resourceName_155: string;
                export { resourceName_155 as resourceName };
                const optionText_40: string;
                export { optionText_40 as optionText };
                const validators_208: string[];
                export { validators_208 as validators };
                const errorMessages_208: string[];
                export { errorMessages_208 as errorMessages };
                const id_497: string;
                export { id_497 as id };
                const label_438: string;
                export { label_438 as label };
            }
            export { type_411 as type };
            export namespace agent {
                const targetClass_99: string;
                export { targetClass_99 as targetClass };
                const type_415: string;
                export { type_415 as type };
                const nullable_408: boolean;
                export { nullable_408 as nullable };
                const write_408: boolean;
                export { write_408 as write };
                const read_408: boolean;
                export { read_408 as read };
                export namespace resource_60 {
                    export namespace model_97 {
                        export namespace id_498 {
                            const type_416: string;
                            export { type_416 as type };
                            const nullable_409: boolean;
                            export { nullable_409 as nullable };
                            const write_409: boolean;
                            export { write_409 as write };
                            const read_409: boolean;
                            export { read_409 as read };
                            const validators_209: string[];
                            export { validators_209 as validators };
                            const errorMessages_209: string[];
                            export { errorMessages_209 as errorMessages };
                            const id_499: string;
                            export { id_499 as id };
                            const label_439: string;
                            export { label_439 as label };
                        }
                        export { id_498 as id };
                        export namespace fullName_1 {
                            const type_417: string;
                            export { type_417 as type };
                            const nullable_410: boolean;
                            export { nullable_410 as nullable };
                            const write_410: boolean;
                            export { write_410 as write };
                            const read_410: boolean;
                            export { read_410 as read };
                            const validators_210: string[];
                            export { validators_210 as validators };
                            const errorMessages_210: string[];
                            export { errorMessages_210 as errorMessages };
                            const id_500: string;
                            export { id_500 as id };
                            const label_440: string;
                            export { label_440 as label };
                        }
                        export { fullName_1 as fullName };
                    }
                    export { model_97 as model };
                    const title_96: string;
                    export { title_96 as title };
                    const resourceName_156: string;
                    export { resourceName_156 as resourceName };
                }
                export { resource_60 as resource };
                const resourceName_157: string;
                export { resourceName_157 as resourceName };
                const optionText_41: string;
                export { optionText_41 as optionText };
                const validators_211: string[];
                export { validators_211 as validators };
                const errorMessages_211: string[];
                export { errorMessages_211 as errorMessages };
                const id_501: string;
                export { id_501 as id };
                const label_441: string;
                export { label_441 as label };
            }
            export namespace propertyName_1 {
                const type_418: string;
                export { type_418 as type };
                const nullable_411: boolean;
                export { nullable_411 as nullable };
                const write_411: boolean;
                export { write_411 as write };
                const read_411: boolean;
                export { read_411 as read };
                const validators_212: string[];
                export { validators_212 as validators };
                const errorMessages_212: string[];
                export { errorMessages_212 as errorMessages };
                const id_502: string;
                export { id_502 as id };
                const label_442: string;
                export { label_442 as label };
            }
            export { propertyName_1 as propertyName };
            export namespace address_1 {
                const type_419: string;
                export { type_419 as type };
                const nullable_412: boolean;
                export { nullable_412 as nullable };
                const write_412: boolean;
                export { write_412 as write };
                const read_412: boolean;
                export { read_412 as read };
                const validators_213: string[];
                export { validators_213 as validators };
                const errorMessages_213: string[];
                export { errorMessages_213 as errorMessages };
                const id_503: string;
                export { id_503 as id };
                const label_443: string;
                export { label_443 as label };
            }
            export { address_1 as address };
            export namespace rentableUnits {
                const type_420: string;
                export { type_420 as type };
                const nullable_413: boolean;
                export { nullable_413 as nullable };
                const write_413: boolean;
                export { write_413 as write };
                const read_413: boolean;
                export { read_413 as read };
                const validators_214: string[];
                export { validators_214 as validators };
                const errorMessages_214: string[];
                export { errorMessages_214 as errorMessages };
                const id_504: string;
                export { id_504 as id };
                const label_444: string;
                export { label_444 as label };
            }
            export namespace maximumOccupancy {
                const type_421: string;
                export { type_421 as type };
                const nullable_414: boolean;
                export { nullable_414 as nullable };
                const write_414: boolean;
                export { write_414 as write };
                const read_414: boolean;
                export { read_414 as read };
                const validators_215: string[];
                export { validators_215 as validators };
                const errorMessages_215: string[];
                export { errorMessages_215 as errorMessages };
                const id_505: string;
                export { id_505 as id };
                const label_445: string;
                export { label_445 as label };
            }
            export namespace bathrooms {
                const type_422: string;
                export { type_422 as type };
                const nullable_415: boolean;
                export { nullable_415 as nullable };
                const write_415: boolean;
                export { write_415 as write };
                const read_415: boolean;
                export { read_415 as read };
                const validators_216: string[];
                export { validators_216 as validators };
                const errorMessages_216: string[];
                export { errorMessages_216 as errorMessages };
                const id_506: string;
                export { id_506 as id };
                const label_446: string;
                export { label_446 as label };
            }
            export namespace floors {
                const type_423: string;
                export { type_423 as type };
                const nullable_416: boolean;
                export { nullable_416 as nullable };
                const write_416: boolean;
                export { write_416 as write };
                const read_416: boolean;
                export { read_416 as read };
                const validators_217: string[];
                export { validators_217 as validators };
                const errorMessages_217: string[];
                export { errorMessages_217 as errorMessages };
                const id_507: string;
                export { id_507 as id };
                const label_447: string;
                export { label_447 as label };
            }
            export namespace bedrooms {
                const type_424: string;
                export { type_424 as type };
                const nullable_417: boolean;
                export { nullable_417 as nullable };
                const write_417: boolean;
                export { write_417 as write };
                const read_417: boolean;
                export { read_417 as read };
                const validators_218: string[];
                export { validators_218 as validators };
                const errorMessages_218: string[];
                export { errorMessages_218 as errorMessages };
                const id_508: string;
                export { id_508 as id };
                const label_448: string;
                export { label_448 as label };
            }
            export namespace receptions {
                const type_425: string;
                export { type_425 as type };
                const nullable_418: boolean;
                export { nullable_418 as nullable };
                const write_418: boolean;
                export { write_418 as write };
                const read_418: boolean;
                export { read_418 as read };
                const id_509: string;
                export { id_509 as id };
                const label_449: string;
                export { label_449 as label };
            }
            export namespace hasPartition {
                const type_426: string;
                export { type_426 as type };
                const nullable_419: boolean;
                export { nullable_419 as nullable };
                const write_419: boolean;
                export { write_419 as write };
                const read_419: boolean;
                export { read_419 as read };
                const validators_219: string[];
                export { validators_219 as validators };
                const errorMessages_219: string[];
                export { errorMessages_219 as errorMessages };
                const id_510: string;
                export { id_510 as id };
                const label_450: string;
                export { label_450 as label };
            }
            export namespace floorplans_2 {
                const type_427: string;
                export { type_427 as type };
                const nullable_420: boolean;
                export { nullable_420 as nullable };
                const write_420: boolean;
                export { write_420 as write };
                const read_420: boolean;
                export { read_420 as read };
                const validators_220: string[];
                export { validators_220 as validators };
                const errorMessages_220: string[];
                export { errorMessages_220 as errorMessages };
                const id_511: string;
                export { id_511 as id };
                const label_451: string;
                export { label_451 as label };
            }
            export { floorplans_2 as floorplans };
            export namespace partitionLocation {
                const type_428: string;
                export { type_428 as type };
                const nullable_421: boolean;
                export { nullable_421 as nullable };
                const write_421: boolean;
                export { write_421 as write };
                const read_421: boolean;
                export { read_421 as read };
                const id_512: string;
                export { id_512 as id };
                const label_452: string;
                export { label_452 as label };
            }
            export namespace separateToilet {
                const type_429: string;
                export { type_429 as type };
                const nullable_422: boolean;
                export { nullable_422 as nullable };
                const write_422: boolean;
                export { write_422 as write };
                const read_422: boolean;
                export { read_422 as read };
                const validators_221: string[];
                export { validators_221 as validators };
                const errorMessages_221: string[];
                export { errorMessages_221 as errorMessages };
                const id_513: string;
                export { id_513 as id };
                const label_453: string;
                export { label_453 as label };
            }
            export namespace parking {
                const type_430: string;
                export { type_430 as type };
                const nullable_423: boolean;
                export { nullable_423 as nullable };
                const write_423: boolean;
                export { write_423 as write };
                const read_423: boolean;
                export { read_423 as read };
                const validators_222: string[];
                export { validators_222 as validators };
                const errorMessages_222: string[];
                export { errorMessages_222 as errorMessages };
                const id_514: string;
                export { id_514 as id };
                const label_454: string;
                export { label_454 as label };
            }
            export namespace concierge {
                const type_431: string;
                export { type_431 as type };
                const nullable_424: boolean;
                export { nullable_424 as nullable };
                const write_424: boolean;
                export { write_424 as write };
                const read_424: boolean;
                export { read_424 as read };
                const validators_223: string[];
                export { validators_223 as validators };
                const errorMessages_223: string[];
                export { errorMessages_223 as errorMessages };
                const id_515: string;
                export { id_515 as id };
                const label_455: string;
                export { label_455 as label };
            }
            export namespace lift {
                const type_432: string;
                export { type_432 as type };
                const nullable_425: boolean;
                export { nullable_425 as nullable };
                const write_425: boolean;
                export { write_425 as write };
                const read_425: boolean;
                export { read_425 as read };
                const validators_224: string[];
                export { validators_224 as validators };
                const errorMessages_224: string[];
                export { errorMessages_224 as errorMessages };
                const id_516: string;
                export { id_516 as id };
                const label_456: string;
                export { label_456 as label };
            }
            export namespace floorNumber {
                const type_433: string;
                export { type_433 as type };
                const nullable_426: boolean;
                export { nullable_426 as nullable };
                const write_426: boolean;
                export { write_426 as write };
                const read_426: boolean;
                export { read_426 as read };
                const validators_225: string[];
                export { validators_225 as validators };
                const errorMessages_225: string[];
                export { errorMessages_225 as errorMessages };
                const id_517: string;
                export { id_517 as id };
                const label_457: string;
                export { label_457 as label };
            }
            export namespace gym {
                const type_434: string;
                export { type_434 as type };
                const nullable_427: boolean;
                export { nullable_427 as nullable };
                const write_427: boolean;
                export { write_427 as write };
                const read_427: boolean;
                export { read_427 as read };
                const validators_226: string[];
                export { validators_226 as validators };
                const errorMessages_226: string[];
                export { errorMessages_226 as errorMessages };
                const id_518: string;
                export { id_518 as id };
                const label_458: string;
                export { label_458 as label };
            }
            export namespace spa {
                const type_435: string;
                export { type_435 as type };
                const nullable_428: boolean;
                export { nullable_428 as nullable };
                const write_428: boolean;
                export { write_428 as write };
                const read_428: boolean;
                export { read_428 as read };
                const validators_227: string[];
                export { validators_227 as validators };
                const errorMessages_227: string[];
                export { errorMessages_227 as errorMessages };
                const id_519: string;
                export { id_519 as id };
                const label_459: string;
                export { label_459 as label };
            }
            export namespace sharedBPG {
                const type_436: string;
                export { type_436 as type };
                const nullable_429: boolean;
                export { nullable_429 as nullable };
                const write_429: boolean;
                export { write_429 as write };
                const read_429: boolean;
                export { read_429 as read };
                const id_520: string;
                export { id_520 as id };
                const label_460: string;
                export { label_460 as label };
            }
            export namespace woodenFloors {
                const type_437: string;
                export { type_437 as type };
                const nullable_430: boolean;
                export { nullable_430 as nullable };
                const write_430: boolean;
                export { write_430 as write };
                const read_430: boolean;
                export { read_430 as read };
                const validators_228: string[];
                export { validators_228 as validators };
                const errorMessages_228: string[];
                export { errorMessages_228 as errorMessages };
                const id_521: string;
                export { id_521 as id };
                const label_461: string;
                export { label_461 as label };
            }
            export namespace carpet {
                const type_438: string;
                export { type_438 as type };
                const nullable_431: boolean;
                export { nullable_431 as nullable };
                const write_431: boolean;
                export { write_431 as write };
                const read_431: boolean;
                export { read_431 as read };
                const validators_229: string[];
                export { validators_229 as validators };
                const errorMessages_229: string[];
                export { errorMessages_229 as errorMessages };
                const id_522: string;
                export { id_522 as id };
                const label_462: string;
                export { label_462 as label };
            }
            export namespace smokeAlarm {
                const type_439: string;
                export { type_439 as type };
                const nullable_432: boolean;
                export { nullable_432 as nullable };
                const write_432: boolean;
                export { write_432 as write };
                const read_432: boolean;
                export { read_432 as read };
                const validators_230: string[];
                export { validators_230 as validators };
                const errorMessages_230: string[];
                export { errorMessages_230 as errorMessages };
                const id_523: string;
                export { id_523 as id };
                const label_463: string;
                export { label_463 as label };
            }
            export namespace CODetector {
                const type_440: string;
                export { type_440 as type };
                const nullable_433: boolean;
                export { nullable_433 as nullable };
                const write_433: boolean;
                export { write_433 as write };
                const read_433: boolean;
                export { read_433 as read };
                const validators_231: string[];
                export { validators_231 as validators };
                const errorMessages_231: string[];
                export { errorMessages_231 as errorMessages };
                const id_524: string;
                export { id_524 as id };
                const label_464: string;
                export { label_464 as label };
            }
            export namespace storageRoom {
                const type_441: string;
                export { type_441 as type };
                const nullable_434: boolean;
                export { nullable_434 as nullable };
                const write_434: boolean;
                export { write_434 as write };
                const read_434: boolean;
                export { read_434 as read };
                const validators_232: string[];
                export { validators_232 as validators };
                const errorMessages_232: string[];
                export { errorMessages_232 as errorMessages };
                const id_525: string;
                export { id_525 as id };
                const label_465: string;
                export { label_465 as label };
            }
            export namespace longitude {
                const type_442: string;
                export { type_442 as type };
                const nullable_435: boolean;
                export { nullable_435 as nullable };
                const write_435: boolean;
                export { write_435 as write };
                const read_435: boolean;
                export { read_435 as read };
                const id_526: string;
                export { id_526 as id };
                const label_466: string;
                export { label_466 as label };
            }
            export namespace latitude {
                const type_443: string;
                export { type_443 as type };
                const nullable_436: boolean;
                export { nullable_436 as nullable };
                const write_436: boolean;
                export { write_436 as write };
                const read_436: boolean;
                export { read_436 as read };
                const id_527: string;
                export { id_527 as id };
                const label_467: string;
                export { label_467 as label };
            }
            export namespace livingRoom {
                const targetClass_100: string;
                export { targetClass_100 as targetClass };
                const type_444: string;
                export { type_444 as type };
                const nullable_437: boolean;
                export { nullable_437 as nullable };
                const write_437: boolean;
                export { write_437 as write };
                const read_437: boolean;
                export { read_437 as read };
                export namespace resource_61 {
                    export namespace model_98 {
                        export namespace id_528 {
                            const type_445: string;
                            export { type_445 as type };
                            const nullable_438: boolean;
                            export { nullable_438 as nullable };
                            const write_438: boolean;
                            export { write_438 as write };
                            const read_438: boolean;
                            export { read_438 as read };
                            const validators_233: string[];
                            export { validators_233 as validators };
                            const errorMessages_233: string[];
                            export { errorMessages_233 as errorMessages };
                            const id_529: string;
                            export { id_529 as id };
                            const label_468: string;
                            export { label_468 as label };
                        }
                        export { id_528 as id };
                        export namespace diningArea_1 {
                            const type_446: string;
                            export { type_446 as type };
                            const nullable_439: boolean;
                            export { nullable_439 as nullable };
                            const write_439: boolean;
                            export { write_439 as write };
                            const read_439: boolean;
                            export { read_439 as read };
                            const validators_234: string[];
                            export { validators_234 as validators };
                            const errorMessages_234: string[];
                            export { errorMessages_234 as errorMessages };
                            const id_530: string;
                            export { id_530 as id };
                            const label_469: string;
                            export { label_469 as label };
                        }
                        export { diningArea_1 as diningArea };
                        export namespace sofa_1 {
                            const type_447: string;
                            export { type_447 as type };
                            const nullable_440: boolean;
                            export { nullable_440 as nullable };
                            const write_440: boolean;
                            export { write_440 as write };
                            const read_440: boolean;
                            export { read_440 as read };
                            const validators_235: string[];
                            export { validators_235 as validators };
                            const errorMessages_235: string[];
                            export { errorMessages_235 as errorMessages };
                            const id_531: string;
                            export { id_531 as id };
                            const label_470: string;
                            export { label_470 as label };
                        }
                        export { sofa_1 as sofa };
                        export namespace TV {
                            const type_448: string;
                            export { type_448 as type };
                            const nullable_441: boolean;
                            export { nullable_441 as nullable };
                            const write_441: boolean;
                            export { write_441 as write };
                            const read_441: boolean;
                            export { read_441 as read };
                            const validators_236: string[];
                            export { validators_236 as validators };
                            const errorMessages_236: string[];
                            export { errorMessages_236 as errorMessages };
                            const id_532: string;
                            export { id_532 as id };
                            const label_471: string;
                            export { label_471 as label };
                        }
                        export namespace coffeeTable {
                            const type_449: string;
                            export { type_449 as type };
                            const nullable_442: boolean;
                            export { nullable_442 as nullable };
                            const write_442: boolean;
                            export { write_442 as write };
                            const read_442: boolean;
                            export { read_442 as read };
                            const validators_237: string[];
                            export { validators_237 as validators };
                            const errorMessages_237: string[];
                            export { errorMessages_237 as errorMessages };
                            const id_533: string;
                            export { id_533 as id };
                            const label_472: string;
                            export { label_472 as label };
                        }
                    }
                    export { model_98 as model };
                    const title_97: string;
                    export { title_97 as title };
                    const resourceName_158: string;
                    export { resourceName_158 as resourceName };
                }
                export { resource_61 as resource };
                const resourceName_159: string;
                export { resourceName_159 as resourceName };
                const validators_238: string[];
                export { validators_238 as validators };
                const errorMessages_238: string[];
                export { errorMessages_238 as errorMessages };
                const id_534: string;
                export { id_534 as id };
                const label_473: string;
                export { label_473 as label };
            }
            export namespace kitchen {
                const targetClass_101: string;
                export { targetClass_101 as targetClass };
                const type_450: string;
                export { type_450 as type };
                const nullable_443: boolean;
                export { nullable_443 as nullable };
                const write_443: boolean;
                export { write_443 as write };
                const read_443: boolean;
                export { read_443 as read };
                export namespace resource_62 {
                    export namespace model_99 {
                        export namespace id_535 {
                            const type_451: string;
                            export { type_451 as type };
                            const nullable_444: boolean;
                            export { nullable_444 as nullable };
                            const write_444: boolean;
                            export { write_444 as write };
                            const read_444: boolean;
                            export { read_444 as read };
                            const validators_239: string[];
                            export { validators_239 as validators };
                            const errorMessages_239: string[];
                            export { errorMessages_239 as errorMessages };
                            const id_536: string;
                            export { id_536 as id };
                            const label_474: string;
                            export { label_474 as label };
                        }
                        export { id_535 as id };
                        export namespace diningArea_2 {
                            const type_452: string;
                            export { type_452 as type };
                            const nullable_445: boolean;
                            export { nullable_445 as nullable };
                            const write_445: boolean;
                            export { write_445 as write };
                            const read_445: boolean;
                            export { read_445 as read };
                            const validators_240: string[];
                            export { validators_240 as validators };
                            const errorMessages_240: string[];
                            export { errorMessages_240 as errorMessages };
                            const id_537: string;
                            export { id_537 as id };
                            const label_475: string;
                            export { label_475 as label };
                        }
                        export { diningArea_2 as diningArea };
                        export namespace washingMachine_1 {
                            const type_453: string;
                            export { type_453 as type };
                            const nullable_446: boolean;
                            export { nullable_446 as nullable };
                            const write_446: boolean;
                            export { write_446 as write };
                            const read_446: boolean;
                            export { read_446 as read };
                            const validators_241: string[];
                            export { validators_241 as validators };
                            const errorMessages_241: string[];
                            export { errorMessages_241 as errorMessages };
                            const id_538: string;
                            export { id_538 as id };
                            const label_476: string;
                            export { label_476 as label };
                        }
                        export { washingMachine_1 as washingMachine };
                        export namespace tumbleDryer_1 {
                            const type_454: string;
                            export { type_454 as type };
                            const nullable_447: boolean;
                            export { nullable_447 as nullable };
                            const write_447: boolean;
                            export { write_447 as write };
                            const read_447: boolean;
                            export { read_447 as read };
                            const validators_242: string[];
                            export { validators_242 as validators };
                            const errorMessages_242: string[];
                            export { errorMessages_242 as errorMessages };
                            const id_539: string;
                            export { id_539 as id };
                            const label_477: string;
                            export { label_477 as label };
                        }
                        export { tumbleDryer_1 as tumbleDryer };
                        export namespace microwave_1 {
                            const type_455: string;
                            export { type_455 as type };
                            const nullable_448: boolean;
                            export { nullable_448 as nullable };
                            const write_448: boolean;
                            export { write_448 as write };
                            const read_448: boolean;
                            export { read_448 as read };
                            const validators_243: string[];
                            export { validators_243 as validators };
                            const errorMessages_243: string[];
                            export { errorMessages_243 as errorMessages };
                            const id_540: string;
                            export { id_540 as id };
                            const label_478: string;
                            export { label_478 as label };
                        }
                        export { microwave_1 as microwave };
                        export namespace dishwasher_1 {
                            const type_456: string;
                            export { type_456 as type };
                            const nullable_449: boolean;
                            export { nullable_449 as nullable };
                            const write_449: boolean;
                            export { write_449 as write };
                            const read_449: boolean;
                            export { read_449 as read };
                            const validators_244: string[];
                            export { validators_244 as validators };
                            const errorMessages_244: string[];
                            export { errorMessages_244 as errorMessages };
                            const id_541: string;
                            export { id_541 as id };
                            const label_479: string;
                            export { label_479 as label };
                        }
                        export { dishwasher_1 as dishwasher };
                    }
                    export { model_99 as model };
                    const title_98: string;
                    export { title_98 as title };
                    const resourceName_160: string;
                    export { resourceName_160 as resourceName };
                }
                export { resource_62 as resource };
                const resourceName_161: string;
                export { resourceName_161 as resourceName };
                const validators_245: string[];
                export { validators_245 as validators };
                const errorMessages_245: string[];
                export { errorMessages_245 as errorMessages };
                const id_542: string;
                export { id_542 as id };
                const label_480: string;
                export { label_480 as label };
            }
            export namespace country_1 {
                const targetClass_102: string;
                export { targetClass_102 as targetClass };
                const type_457: string;
                export { type_457 as type };
                const nullable_450: boolean;
                export { nullable_450 as nullable };
                const write_450: boolean;
                export { write_450 as write };
                const read_450: boolean;
                export { read_450 as read };
                export namespace resource_63 {
                    export namespace model_100 {
                        export namespace id_543 {
                            const type_458: string;
                            export { type_458 as type };
                            const nullable_451: boolean;
                            export { nullable_451 as nullable };
                            const write_451: boolean;
                            export { write_451 as write };
                            const read_451: boolean;
                            export { read_451 as read };
                            const validators_246: string[];
                            export { validators_246 as validators };
                            const errorMessages_246: string[];
                            export { errorMessages_246 as errorMessages };
                            const id_544: string;
                            export { id_544 as id };
                            const label_481: string;
                            export { label_481 as label };
                        }
                        export { id_543 as id };
                        export namespace name_16 {
                            const type_459: string;
                            export { type_459 as type };
                            const nullable_452: boolean;
                            export { nullable_452 as nullable };
                            const write_452: boolean;
                            export { write_452 as write };
                            const read_452: boolean;
                            export { read_452 as read };
                            const validators_247: string[];
                            export { validators_247 as validators };
                            const errorMessages_247: string[];
                            export { errorMessages_247 as errorMessages };
                            const id_545: string;
                            export { id_545 as id };
                            const label_482: string;
                            export { label_482 as label };
                        }
                        export { name_16 as name };
                    }
                    export { model_100 as model };
                    const title_99: string;
                    export { title_99 as title };
                    const resourceName_162: string;
                    export { resourceName_162 as resourceName };
                }
                export { resource_63 as resource };
                const resourceName_163: string;
                export { resourceName_163 as resourceName };
                const optionText_42: string;
                export { optionText_42 as optionText };
                const validators_248: string[];
                export { validators_248 as validators };
                const errorMessages_248: string[];
                export { errorMessages_248 as errorMessages };
                const id_546: string;
                export { id_546 as id };
                const label_483: string;
                export { label_483 as label };
            }
            export { country_1 as country };
            export namespace city_5 {
                const targetClass_103: string;
                export { targetClass_103 as targetClass };
                const type_460: string;
                export { type_460 as type };
                const nullable_453: boolean;
                export { nullable_453 as nullable };
                const write_453: boolean;
                export { write_453 as write };
                const read_453: boolean;
                export { read_453 as read };
                export namespace resource_64 {
                    export namespace model_101 {
                        export namespace id_547 {
                            const type_461: string;
                            export { type_461 as type };
                            const nullable_454: boolean;
                            export { nullable_454 as nullable };
                            const write_454: boolean;
                            export { write_454 as write };
                            const read_454: boolean;
                            export { read_454 as read };
                            const validators_249: string[];
                            export { validators_249 as validators };
                            const errorMessages_249: string[];
                            export { errorMessages_249 as errorMessages };
                            const id_548: string;
                            export { id_548 as id };
                            const label_484: string;
                            export { label_484 as label };
                        }
                        export { id_547 as id };
                        export namespace name_17 {
                            const type_462: string;
                            export { type_462 as type };
                            const nullable_455: boolean;
                            export { nullable_455 as nullable };
                            const write_455: boolean;
                            export { write_455 as write };
                            const read_455: boolean;
                            export { read_455 as read };
                            const validators_250: string[];
                            export { validators_250 as validators };
                            const errorMessages_250: string[];
                            export { errorMessages_250 as errorMessages };
                            const id_549: string;
                            export { id_549 as id };
                            const label_485: string;
                            export { label_485 as label };
                        }
                        export { name_17 as name };
                    }
                    export { model_101 as model };
                    const title_100: string;
                    export { title_100 as title };
                    const resourceName_164: string;
                    export { resourceName_164 as resourceName };
                }
                export { resource_64 as resource };
                const resourceName_165: string;
                export { resourceName_165 as resourceName };
                const optionText_43: string;
                export { optionText_43 as optionText };
                const validators_251: string[];
                export { validators_251 as validators };
                const errorMessages_251: string[];
                export { errorMessages_251 as errorMessages };
                const id_550: string;
                export { id_550 as id };
                const label_486: string;
                export { label_486 as label };
            }
            export { city_5 as city };
            export namespace county_1 {
                const targetClass_104: string;
                export { targetClass_104 as targetClass };
                const type_463: string;
                export { type_463 as type };
                const nullable_456: boolean;
                export { nullable_456 as nullable };
                const write_456: boolean;
                export { write_456 as write };
                const read_456: boolean;
                export { read_456 as read };
                export namespace resource_65 {
                    export namespace model_102 {
                        export namespace id_551 {
                            const type_464: string;
                            export { type_464 as type };
                            const nullable_457: boolean;
                            export { nullable_457 as nullable };
                            const write_457: boolean;
                            export { write_457 as write };
                            const read_457: boolean;
                            export { read_457 as read };
                            const validators_252: string[];
                            export { validators_252 as validators };
                            const errorMessages_252: string[];
                            export { errorMessages_252 as errorMessages };
                            const id_552: string;
                            export { id_552 as id };
                            const label_487: string;
                            export { label_487 as label };
                        }
                        export { id_551 as id };
                        export namespace name_18 {
                            const type_465: string;
                            export { type_465 as type };
                            const nullable_458: boolean;
                            export { nullable_458 as nullable };
                            const write_458: boolean;
                            export { write_458 as write };
                            const read_458: boolean;
                            export { read_458 as read };
                            const validators_253: string[];
                            export { validators_253 as validators };
                            const errorMessages_253: string[];
                            export { errorMessages_253 as errorMessages };
                            const id_553: string;
                            export { id_553 as id };
                            const label_488: string;
                            export { label_488 as label };
                        }
                        export { name_18 as name };
                    }
                    export { model_102 as model };
                    const title_101: string;
                    export { title_101 as title };
                    const resourceName_166: string;
                    export { resourceName_166 as resourceName };
                }
                export { resource_65 as resource };
                const resourceName_167: string;
                export { resourceName_167 as resourceName };
                const optionText_44: string;
                export { optionText_44 as optionText };
                const validators_254: string[];
                export { validators_254 as validators };
                const errorMessages_254: string[];
                export { errorMessages_254 as errorMessages };
                const id_554: string;
                export { id_554 as id };
                const label_489: string;
                export { label_489 as label };
            }
            export { county_1 as county };
            export namespace area_1 {
                const targetClass_105: string;
                export { targetClass_105 as targetClass };
                const type_466: string;
                export { type_466 as type };
                const nullable_459: boolean;
                export { nullable_459 as nullable };
                const write_459: boolean;
                export { write_459 as write };
                const read_459: boolean;
                export { read_459 as read };
                export namespace resource_66 {
                    export namespace model_103 {
                        export namespace id_555 {
                            const type_467: string;
                            export { type_467 as type };
                            const nullable_460: boolean;
                            export { nullable_460 as nullable };
                            const write_460: boolean;
                            export { write_460 as write };
                            const read_460: boolean;
                            export { read_460 as read };
                            const validators_255: string[];
                            export { validators_255 as validators };
                            const errorMessages_255: string[];
                            export { errorMessages_255 as errorMessages };
                            const id_556: string;
                            export { id_556 as id };
                            const label_490: string;
                            export { label_490 as label };
                        }
                        export { id_555 as id };
                        export namespace name_19 {
                            const type_468: string;
                            export { type_468 as type };
                            const nullable_461: boolean;
                            export { nullable_461 as nullable };
                            const write_461: boolean;
                            export { write_461 as write };
                            const read_461: boolean;
                            export { read_461 as read };
                            const validators_256: string[];
                            export { validators_256 as validators };
                            const errorMessages_256: string[];
                            export { errorMessages_256 as errorMessages };
                            const id_557: string;
                            export { id_557 as id };
                            const label_491: string;
                            export { label_491 as label };
                        }
                        export { name_19 as name };
                    }
                    export { model_103 as model };
                    const title_102: string;
                    export { title_102 as title };
                    const resourceName_168: string;
                    export { resourceName_168 as resourceName };
                }
                export { resource_66 as resource };
                const resourceName_169: string;
                export { resourceName_169 as resourceName };
                const optionText_45: string;
                export { optionText_45 as optionText };
                const validators_257: string[];
                export { validators_257 as validators };
                const errorMessages_257: string[];
                export { errorMessages_257 as errorMessages };
                const id_558: string;
                export { id_558 as id };
                const label_492: string;
                export { label_492 as label };
            }
            export { area_1 as area };
            export namespace neighborhood_1 {
                const targetClass_106: string;
                export { targetClass_106 as targetClass };
                const type_469: string;
                export { type_469 as type };
                const nullable_462: boolean;
                export { nullable_462 as nullable };
                const write_462: boolean;
                export { write_462 as write };
                const read_462: boolean;
                export { read_462 as read };
                export namespace resource_67 {
                    export namespace model_104 {
                        export namespace id_559 {
                            const type_470: string;
                            export { type_470 as type };
                            const nullable_463: boolean;
                            export { nullable_463 as nullable };
                            const write_463: boolean;
                            export { write_463 as write };
                            const read_463: boolean;
                            export { read_463 as read };
                            const validators_258: string[];
                            export { validators_258 as validators };
                            const errorMessages_258: string[];
                            export { errorMessages_258 as errorMessages };
                            const id_560: string;
                            export { id_560 as id };
                            const label_493: string;
                            export { label_493 as label };
                        }
                        export { id_559 as id };
                        export namespace name_20 {
                            const type_471: string;
                            export { type_471 as type };
                            const nullable_464: boolean;
                            export { nullable_464 as nullable };
                            const write_464: boolean;
                            export { write_464 as write };
                            const read_464: boolean;
                            export { read_464 as read };
                            const validators_259: string[];
                            export { validators_259 as validators };
                            const errorMessages_259: string[];
                            export { errorMessages_259 as errorMessages };
                            const id_561: string;
                            export { id_561 as id };
                            const label_494: string;
                            export { label_494 as label };
                        }
                        export { name_20 as name };
                    }
                    export { model_104 as model };
                    const title_103: string;
                    export { title_103 as title };
                    const resourceName_170: string;
                    export { resourceName_170 as resourceName };
                }
                export { resource_67 as resource };
                const resourceName_171: string;
                export { resourceName_171 as resourceName };
                const optionText_46: string;
                export { optionText_46 as optionText };
                const validators_260: string[];
                export { validators_260 as validators };
                const errorMessages_260: string[];
                export { errorMessages_260 as errorMessages };
                const id_562: string;
                export { id_562 as id };
                const label_495: string;
                export { label_495 as label };
            }
            export { neighborhood_1 as neighborhood };
            export namespace postcode_15 {
                const targetClass_107: string;
                export { targetClass_107 as targetClass };
                const type_472: string;
                export { type_472 as type };
                const nullable_465: boolean;
                export { nullable_465 as nullable };
                const write_465: boolean;
                export { write_465 as write };
                const read_465: boolean;
                export { read_465 as read };
                export namespace resource_68 {
                    export namespace model_105 {
                        export namespace id_563 {
                            const type_473: string;
                            export { type_473 as type };
                            const nullable_466: boolean;
                            export { nullable_466 as nullable };
                            const write_466: boolean;
                            export { write_466 as write };
                            const read_466: boolean;
                            export { read_466 as read };
                            const validators_261: string[];
                            export { validators_261 as validators };
                            const errorMessages_261: string[];
                            export { errorMessages_261 as errorMessages };
                            const id_564: string;
                            export { id_564 as id };
                            const label_496: string;
                            export { label_496 as label };
                        }
                        export { id_563 as id };
                        export namespace postcode_16 {
                            const type_474: string;
                            export { type_474 as type };
                            const nullable_467: boolean;
                            export { nullable_467 as nullable };
                            const write_467: boolean;
                            export { write_467 as write };
                            const read_467: boolean;
                            export { read_467 as read };
                            const validators_262: string[];
                            export { validators_262 as validators };
                            const errorMessages_262: string[];
                            export { errorMessages_262 as errorMessages };
                            const id_565: string;
                            export { id_565 as id };
                            const label_497: string;
                            export { label_497 as label };
                        }
                        export { postcode_16 as postcode };
                    }
                    export { model_105 as model };
                    const title_104: string;
                    export { title_104 as title };
                    const resourceName_172: string;
                    export { resourceName_172 as resourceName };
                }
                export { resource_68 as resource };
                const resourceName_173: string;
                export { resourceName_173 as resourceName };
                const optionText_47: string;
                export { optionText_47 as optionText };
                const validators_263: string[];
                export { validators_263 as validators };
                const errorMessages_263: string[];
                export { errorMessages_263 as errorMessages };
                const id_566: string;
                export { id_566 as id };
                const label_498: string;
                export { label_498 as label };
            }
            export { postcode_15 as postcode };
            export namespace utilities {
                const targetClass_108: string;
                export { targetClass_108 as targetClass };
                const type_475: string;
                export { type_475 as type };
                const nullable_468: boolean;
                export { nullable_468 as nullable };
                const write_468: boolean;
                export { write_468 as write };
                const read_468: boolean;
                export { read_468 as read };
                export namespace resource_69 {
                    export namespace model_106 {
                        export namespace id_567 {
                            const type_476: string;
                            export { type_476 as type };
                            const nullable_469: boolean;
                            export { nullable_469 as nullable };
                            const write_469: boolean;
                            export { write_469 as write };
                            const read_469: boolean;
                            export { read_469 as read };
                            const validators_264: string[];
                            export { validators_264 as validators };
                            const errorMessages_264: string[];
                            export { errorMessages_264 as errorMessages };
                            const id_568: string;
                            export { id_568 as id };
                            const label_499: string;
                            export { label_499 as label };
                        }
                        export { id_567 as id };
                        export namespace name_21 {
                            const type_477: string;
                            export { type_477 as type };
                            const nullable_470: boolean;
                            export { nullable_470 as nullable };
                            const write_470: boolean;
                            export { write_470 as write };
                            const read_470: boolean;
                            export { read_470 as read };
                            const validators_265: string[];
                            export { validators_265 as validators };
                            const errorMessages_265: string[];
                            export { errorMessages_265 as errorMessages };
                            const id_569: string;
                            export { id_569 as id };
                            const label_500: string;
                            export { label_500 as label };
                        }
                        export { name_21 as name };
                    }
                    export { model_106 as model };
                    const title_105: string;
                    export { title_105 as title };
                    const resourceName_174: string;
                    export { resourceName_174 as resourceName };
                }
                export { resource_69 as resource };
                const resourceName_175: string;
                export { resourceName_175 as resourceName };
                const validators_266: string[];
                export { validators_266 as validators };
                const errorMessages_266: string[];
                export { errorMessages_266 as errorMessages };
                const id_570: string;
                export { id_570 as id };
                const label_501: string;
                export { label_501 as label };
            }
            export namespace backGarden {
                const type_478: string;
                export { type_478 as type };
                const nullable_471: boolean;
                export { nullable_471 as nullable };
                const write_471: boolean;
                export { write_471 as write };
                const read_471: boolean;
                export { read_471 as read };
                const validators_267: string[];
                export { validators_267 as validators };
                const errorMessages_267: string[];
                export { errorMessages_267 as errorMessages };
                const id_571: string;
                export { id_571 as id };
                const label_502: string;
                export { label_502 as label };
            }
            export namespace communalGarden {
                const type_479: string;
                export { type_479 as type };
                const nullable_472: boolean;
                export { nullable_472 as nullable };
                const write_472: boolean;
                export { write_472 as write };
                const read_472: boolean;
                export { read_472 as read };
                const validators_268: string[];
                export { validators_268 as validators };
                const errorMessages_268: string[];
                export { errorMessages_268 as errorMessages };
                const id_572: string;
                export { id_572 as id };
                const label_503: string;
                export { label_503 as label };
            }
            export namespace frontGarden {
                const type_480: string;
                export { type_480 as type };
                const nullable_473: boolean;
                export { nullable_473 as nullable };
                const write_473: boolean;
                export { write_473 as write };
                const read_473: boolean;
                export { read_473 as read };
                const validators_269: string[];
                export { validators_269 as validators };
                const errorMessages_269: string[];
                export { errorMessages_269 as errorMessages };
                const id_573: string;
                export { id_573 as id };
                const label_504: string;
                export { label_504 as label };
            }
            export namespace privateGarden {
                const type_481: string;
                export { type_481 as type };
                const nullable_474: boolean;
                export { nullable_474 as nullable };
                const write_474: boolean;
                export { write_474 as write };
                const read_474: boolean;
                export { read_474 as read };
                const validators_270: string[];
                export { validators_270 as validators };
                const errorMessages_270: string[];
                export { errorMessages_270 as errorMessages };
                const id_574: string;
                export { id_574 as id };
                const label_505: string;
                export { label_505 as label };
            }
            export namespace terrace {
                const type_482: string;
                export { type_482 as type };
                const nullable_475: boolean;
                export { nullable_475 as nullable };
                const write_475: boolean;
                export { write_475 as write };
                const read_475: boolean;
                export { read_475 as read };
                const validators_271: string[];
                export { validators_271 as validators };
                const errorMessages_271: string[];
                export { errorMessages_271 as errorMessages };
                const id_575: string;
                export { id_575 as id };
                const label_506: string;
                export { label_506 as label };
            }
            export namespace patio {
                const type_483: string;
                export { type_483 as type };
                const nullable_476: boolean;
                export { nullable_476 as nullable };
                const write_476: boolean;
                export { write_476 as write };
                const read_476: boolean;
                export { read_476 as read };
                const validators_272: string[];
                export { validators_272 as validators };
                const errorMessages_272: string[];
                export { errorMessages_272 as errorMessages };
                const id_576: string;
                export { id_576 as id };
                const label_507: string;
                export { label_507 as label };
            }
            export namespace sharedBathroom {
                const targetClass_109: string;
                export { targetClass_109 as targetClass };
                const type_484: string;
                export { type_484 as type };
                const nullable_477: boolean;
                export { nullable_477 as nullable };
                const write_477: boolean;
                export { write_477 as write };
                const read_477: boolean;
                export { read_477 as read };
                export namespace resource_70 {
                    export namespace model_107 {
                        export namespace id_577 {
                            const type_485: string;
                            export { type_485 as type };
                            const nullable_478: boolean;
                            export { nullable_478 as nullable };
                            const write_478: boolean;
                            export { write_478 as write };
                            const read_478: boolean;
                            export { read_478 as read };
                            const validators_273: string[];
                            export { validators_273 as validators };
                            const errorMessages_273: string[];
                            export { errorMessages_273 as errorMessages };
                            const id_578: string;
                            export { id_578 as id };
                            const label_508: string;
                            export { label_508 as label };
                        }
                        export { id_577 as id };
                        export namespace bathOrShower {
                            const type_486: string;
                            export { type_486 as type };
                            const nullable_479: boolean;
                            export { nullable_479 as nullable };
                            const write_479: boolean;
                            export { write_479 as write };
                            const read_479: boolean;
                            export { read_479 as read };
                            const validators_274: string[];
                            export { validators_274 as validators };
                            const errorMessages_274: string[];
                            export { errorMessages_274 as errorMessages };
                            const id_579: string;
                            export { id_579 as id };
                            const label_509: string;
                            export { label_509 as label };
                        }
                        export namespace mirror {
                            const type_487: string;
                            export { type_487 as type };
                            const nullable_480: boolean;
                            export { nullable_480 as nullable };
                            const write_480: boolean;
                            export { write_480 as write };
                            const read_480: boolean;
                            export { read_480 as read };
                            const validators_275: string[];
                            export { validators_275 as validators };
                            const errorMessages_275: string[];
                            export { errorMessages_275 as errorMessages };
                            const id_580: string;
                            export { id_580 as id };
                            const label_510: string;
                            export { label_510 as label };
                        }
                        export namespace bathCurtain {
                            const type_488: string;
                            export { type_488 as type };
                            const nullable_481: boolean;
                            export { nullable_481 as nullable };
                            const write_481: boolean;
                            export { write_481 as write };
                            const read_481: boolean;
                            export { read_481 as read };
                            const validators_276: string[];
                            export { validators_276 as validators };
                            const errorMessages_276: string[];
                            export { errorMessages_276 as errorMessages };
                            const id_581: string;
                            export { id_581 as id };
                            const label_511: string;
                            export { label_511 as label };
                        }
                        export namespace window {
                            const type_489: string;
                            export { type_489 as type };
                            const nullable_482: boolean;
                            export { nullable_482 as nullable };
                            const write_482: boolean;
                            export { write_482 as write };
                            const read_482: boolean;
                            export { read_482 as read };
                            const validators_277: string[];
                            export { validators_277 as validators };
                            const errorMessages_277: string[];
                            export { errorMessages_277 as errorMessages };
                            const id_582: string;
                            export { id_582 as id };
                            const label_512: string;
                            export { label_512 as label };
                        }
                        export namespace jacuzzi {
                            const type_490: string;
                            export { type_490 as type };
                            const nullable_483: boolean;
                            export { nullable_483 as nullable };
                            const write_483: boolean;
                            export { write_483 as write };
                            const read_483: boolean;
                            export { read_483 as read };
                            const validators_278: string[];
                            export { validators_278 as validators };
                            const errorMessages_278: string[];
                            export { errorMessages_278 as errorMessages };
                            const id_583: string;
                            export { id_583 as id };
                            const label_513: string;
                            export { label_513 as label };
                        }
                    }
                    export { model_107 as model };
                    const title_106: string;
                    export { title_106 as title };
                    const resourceName_176: string;
                    export { resourceName_176 as resourceName };
                }
                export { resource_70 as resource };
                const resourceName_177: string;
                export { resourceName_177 as resourceName };
                const validators_279: string[];
                export { validators_279 as validators };
                const errorMessages_279: string[];
                export { errorMessages_279 as errorMessages };
                const id_584: string;
                export { id_584 as id };
                const label_514: string;
                export { label_514 as label };
            }
            export namespace images_4 {
                const type_491: string;
                export { type_491 as type };
                const nullable_484: boolean;
                export { nullable_484 as nullable };
                const write_484: boolean;
                export { write_484 as write };
                const read_484: boolean;
                export { read_484 as read };
                const validators_280: string[];
                export { validators_280 as validators };
                const errorMessages_280: string[];
                export { errorMessages_280 as errorMessages };
                const id_585: string;
                export { id_585 as id };
                const label_515: string;
                export { label_515 as label };
            }
            export { images_4 as images };
            export namespace units_2 {
                const targetClass_110: string;
                export { targetClass_110 as targetClass };
                const type_492: string;
                export { type_492 as type };
                const nullable_485: boolean;
                export { nullable_485 as nullable };
                const write_485: boolean;
                export { write_485 as write };
                const read_485: boolean;
                export { read_485 as read };
                export namespace resource_71 {
                    export namespace model_108 {
                        export namespace id_586 {
                            const type_493: string;
                            export { type_493 as type };
                            const nullable_486: boolean;
                            export { nullable_486 as nullable };
                            const write_486: boolean;
                            export { write_486 as write };
                            const read_486: boolean;
                            export { read_486 as read };
                            const validators_281: string[];
                            export { validators_281 as validators };
                            const errorMessages_281: string[];
                            export { errorMessages_281 as errorMessages };
                            const id_587: string;
                            export { id_587 as id };
                            const label_516: string;
                            export { label_516 as label };
                        }
                        export { id_586 as id };
                        export namespace unitLetter_1 {
                            const type_494: string;
                            export { type_494 as type };
                            const nullable_487: boolean;
                            export { nullable_487 as nullable };
                            const write_487: boolean;
                            export { write_487 as write };
                            const read_487: boolean;
                            export { read_487 as read };
                            const validators_282: string[];
                            export { validators_282 as validators };
                            const errorMessages_282: string[];
                            export { errorMessages_282 as errorMessages };
                            const id_588: string;
                            export { id_588 as id };
                            const label_517: string;
                            export { label_517 as label };
                        }
                        export { unitLetter_1 as unitLetter };
                        export namespace type_495 {
                            const targetClass_111: string;
                            export { targetClass_111 as targetClass };
                            const type_496: string;
                            export { type_496 as type };
                            const nullable_488: boolean;
                            export { nullable_488 as nullable };
                            const write_488: boolean;
                            export { write_488 as write };
                            const read_488: boolean;
                            export { read_488 as read };
                            export namespace resource_72 {
                                export namespace model_109 {
                                    export namespace description_6 {
                                        const type_497: string;
                                        export { type_497 as type };
                                        const nullable_489: boolean;
                                        export { nullable_489 as nullable };
                                        const write_489: boolean;
                                        export { write_489 as write };
                                        const read_489: boolean;
                                        export { read_489 as read };
                                        const validators_283: string[];
                                        export { validators_283 as validators };
                                        const errorMessages_283: string[];
                                        export { errorMessages_283 as errorMessages };
                                        const id_589: string;
                                        export { id_589 as id };
                                        const label_518: string;
                                        export { label_518 as label };
                                    }
                                    export { description_6 as description };
                                }
                                export { model_109 as model };
                                const title_107: string;
                                export { title_107 as title };
                                const resourceName_178: string;
                                export { resourceName_178 as resourceName };
                            }
                            export { resource_72 as resource };
                            const resourceName_179: string;
                            export { resourceName_179 as resourceName };
                            const optionText_48: string;
                            export { optionText_48 as optionText };
                            const validators_284: string[];
                            export { validators_284 as validators };
                            const errorMessages_284: string[];
                            export { errorMessages_284 as errorMessages };
                            const id_590: string;
                            export { id_590 as id };
                            const label_519: string;
                            export { label_519 as label };
                        }
                        export { type_495 as type };
                        export namespace weeklyPrice_1 {
                            const type_498: string;
                            export { type_498 as type };
                            const nullable_490: boolean;
                            export { nullable_490 as nullable };
                            const write_490: boolean;
                            export { write_490 as write };
                            const read_490: boolean;
                            export { read_490 as read };
                            const validators_285: string[];
                            export { validators_285 as validators };
                            const errorMessages_285: string[];
                            export { errorMessages_285 as errorMessages };
                            const id_591: string;
                            export { id_591 as id };
                            const label_520: string;
                            export { label_520 as label };
                        }
                        export { weeklyPrice_1 as weeklyPrice };
                        export namespace availableFrom {
                            const type_499: string;
                            export { type_499 as type };
                            const nullable_491: boolean;
                            export { nullable_491 as nullable };
                            const write_491: boolean;
                            export { write_491 as write };
                            const read_491: boolean;
                            export { read_491 as read };
                            const id_592: string;
                            export { id_592 as id };
                            const label_521: string;
                            export { label_521 as label };
                        }
                        export namespace floorNumber_1 {
                            const type_500: string;
                            export { type_500 as type };
                            const nullable_492: boolean;
                            export { nullable_492 as nullable };
                            const write_492: boolean;
                            export { write_492 as write };
                            const read_492: boolean;
                            export { read_492 as read };
                            const validators_286: string[];
                            export { validators_286 as validators };
                            const errorMessages_286: string[];
                            export { errorMessages_286 as errorMessages };
                            const id_593: string;
                            export { id_593 as id };
                            const label_522: string;
                            export { label_522 as label };
                        }
                        export { floorNumber_1 as floorNumber };
                        export namespace images_5 {
                            const type_501: string;
                            export { type_501 as type };
                            const nullable_493: boolean;
                            export { nullable_493 as nullable };
                            const write_493: boolean;
                            export { write_493 as write };
                            const read_493: boolean;
                            export { read_493 as read };
                            const validators_287: string[];
                            export { validators_287 as validators };
                            const errorMessages_287: string[];
                            export { errorMessages_287 as errorMessages };
                            const id_594: string;
                            export { id_594 as id };
                            const label_523: string;
                            export { label_523 as label };
                        }
                        export { images_5 as images };
                        export namespace currentPlace_23 {
                            const targetClass_112: string;
                            export { targetClass_112 as targetClass };
                            const optionsName_39: string;
                            export { optionsName_39 as optionsName };
                            const type_502: string;
                            export { type_502 as type };
                            const nullable_494: boolean;
                            export { nullable_494 as nullable };
                            const write_494: boolean;
                            export { write_494 as write };
                            const read_494: boolean;
                            export { read_494 as read };
                            const options_39: {
                                id: string;
                                label: string;
                            }[];
                            export { options_39 as options };
                            const validators_288: string[];
                            export { validators_288 as validators };
                            const errorMessages_288: string[];
                            export { errorMessages_288 as errorMessages };
                            const id_595: string;
                            export { id_595 as id };
                            const label_524: string;
                            export { label_524 as label };
                        }
                        export { currentPlace_23 as currentPlace };
                        export namespace requestedTransition_23 {
                            const type_503: string;
                            export { type_503 as type };
                            const nullable_495: boolean;
                            export { nullable_495 as nullable };
                            const write_495: boolean;
                            export { write_495 as write };
                            const read_495: boolean;
                            export { read_495 as read };
                            const id_596: string;
                            export { id_596 as id };
                            const label_525: string;
                            export { label_525 as label };
                        }
                        export { requestedTransition_23 as requestedTransition };
                        export namespace eligibleTransitions_23 {
                            const id_597: string;
                            export { id_597 as id };
                            const label_526: string;
                            export { label_526 as label };
                        }
                        export { eligibleTransitions_23 as eligibleTransitions };
                    }
                    export { model_108 as model };
                    const title_108: string;
                    export { title_108 as title };
                    const resourceName_180: string;
                    export { resourceName_180 as resourceName };
                }
                export { resource_71 as resource };
                const resourceName_181: string;
                export { resourceName_181 as resourceName };
                const validators_289: string[];
                export { validators_289 as validators };
                const errorMessages_289: string[];
                export { errorMessages_289 as errorMessages };
                const id_598: string;
                export { id_598 as id };
                const label_527: string;
                export { label_527 as label };
            }
            export { units_2 as units };
            export namespace askedMonthlyPrice_1 {
                const type_504: string;
                export { type_504 as type };
                const nullable_496: boolean;
                export { nullable_496 as nullable };
                const write_496: boolean;
                export { write_496 as write };
                const read_496: boolean;
                export { read_496 as read };
                const validators_290: string[];
                export { validators_290 as validators };
                const errorMessages_290: string[];
                export { errorMessages_290 as errorMessages };
                const id_599: string;
                export { id_599 as id };
                const label_528: string;
                export { label_528 as label };
            }
            export { askedMonthlyPrice_1 as askedMonthlyPrice };
            export namespace landlordRelationships_1 {
                const targetClass_113: string;
                export { targetClass_113 as targetClass };
                const type_505: string;
                export { type_505 as type };
                const nullable_497: boolean;
                export { nullable_497 as nullable };
                const write_497: boolean;
                export { write_497 as write };
                const read_497: boolean;
                export { read_497 as read };
                export namespace resource_73 {
                    export namespace model_110 {
                        export namespace currentPlace_24 {
                            const targetClass_114: string;
                            export { targetClass_114 as targetClass };
                            const optionsName_40: string;
                            export { optionsName_40 as optionsName };
                            const type_506: string;
                            export { type_506 as type };
                            const nullable_498: boolean;
                            export { nullable_498 as nullable };
                            const write_498: boolean;
                            export { write_498 as write };
                            const read_498: boolean;
                            export { read_498 as read };
                            const options_40: {
                                id: string;
                                label: string;
                            }[];
                            export { options_40 as options };
                            const validators_291: string[];
                            export { validators_291 as validators };
                            const errorMessages_291: string[];
                            export { errorMessages_291 as errorMessages };
                            const id_600: string;
                            export { id_600 as id };
                            const label_529: string;
                            export { label_529 as label };
                        }
                        export { currentPlace_24 as currentPlace };
                        export namespace requestedTransition_24 {
                            const id_601: string;
                            export { id_601 as id };
                            const label_530: string;
                            export { label_530 as label };
                        }
                        export { requestedTransition_24 as requestedTransition };
                        export namespace eligibleTransitions_24 {
                            const id_602: string;
                            export { id_602 as id };
                            const label_531: string;
                            export { label_531 as label };
                        }
                        export { eligibleTransitions_24 as eligibleTransitions };
                    }
                    export { model_110 as model };
                    const title_109: string;
                    export { title_109 as title };
                    const resourceName_182: string;
                    export { resourceName_182 as resourceName };
                }
                export { resource_73 as resource };
                const resourceName_183: string;
                export { resourceName_183 as resourceName };
                const validators_292: string[];
                export { validators_292 as validators };
                const errorMessages_292: string[];
                export { errorMessages_292 as errorMessages };
                const id_603: string;
                export { id_603 as id };
                const label_532: string;
                export { label_532 as label };
            }
            export { landlordRelationships_1 as landlordRelationships };
            export namespace arthurProperty {
                const targetClass_115: string;
                export { targetClass_115 as targetClass };
                const type_507: string;
                export { type_507 as type };
                const nullable_499: boolean;
                export { nullable_499 as nullable };
                const write_499: boolean;
                export { write_499 as write };
                const read_499: boolean;
                export { read_499 as read };
                export namespace resource_74 {
                    export namespace model_111 {
                        export namespace id_604 {
                            const type_508: string;
                            export { type_508 as type };
                            const nullable_500: boolean;
                            export { nullable_500 as nullable };
                            const write_500: boolean;
                            export { write_500 as write };
                            const read_500: boolean;
                            export { read_500 as read };
                            const validators_293: string[];
                            export { validators_293 as validators };
                            const errorMessages_293: string[];
                            export { errorMessages_293 as errorMessages };
                            const id_605: string;
                            export { id_605 as id };
                            const label_533: string;
                            export { label_533 as label };
                        }
                        export { id_604 as id };
                        export namespace unitLetter_2 {
                            const type_509: string;
                            export { type_509 as type };
                            const nullable_501: boolean;
                            export { nullable_501 as nullable };
                            const write_501: boolean;
                            export { write_501 as write };
                            const read_501: boolean;
                            export { read_501 as read };
                            const validators_294: string[];
                            export { validators_294 as validators };
                            const errorMessages_294: string[];
                            export { errorMessages_294 as errorMessages };
                            const id_606: string;
                            export { id_606 as id };
                            const label_534: string;
                            export { label_534 as label };
                        }
                        export { unitLetter_2 as unitLetter };
                        export namespace type_510 {
                            const targetClass_116: string;
                            export { targetClass_116 as targetClass };
                            const type_511: string;
                            export { type_511 as type };
                            const nullable_502: boolean;
                            export { nullable_502 as nullable };
                            const write_502: boolean;
                            export { write_502 as write };
                            const read_502: boolean;
                            export { read_502 as read };
                            export namespace resource_75 {
                                export namespace model_112 {
                                    export namespace description_7 {
                                        const type_512: string;
                                        export { type_512 as type };
                                        const nullable_503: boolean;
                                        export { nullable_503 as nullable };
                                        const write_503: boolean;
                                        export { write_503 as write };
                                        const read_503: boolean;
                                        export { read_503 as read };
                                        const validators_295: string[];
                                        export { validators_295 as validators };
                                        const errorMessages_295: string[];
                                        export { errorMessages_295 as errorMessages };
                                        const id_607: string;
                                        export { id_607 as id };
                                        const label_535: string;
                                        export { label_535 as label };
                                    }
                                    export { description_7 as description };
                                }
                                export { model_112 as model };
                                const title_110: string;
                                export { title_110 as title };
                                const resourceName_184: string;
                                export { resourceName_184 as resourceName };
                            }
                            export { resource_75 as resource };
                            const resourceName_185: string;
                            export { resourceName_185 as resourceName };
                            const optionText_49: string;
                            export { optionText_49 as optionText };
                            const validators_296: string[];
                            export { validators_296 as validators };
                            const errorMessages_296: string[];
                            export { errorMessages_296 as errorMessages };
                            const id_608: string;
                            export { id_608 as id };
                            const label_536: string;
                            export { label_536 as label };
                        }
                        export { type_510 as type };
                        export namespace weeklyPrice_2 {
                            const type_513: string;
                            export { type_513 as type };
                            const nullable_504: boolean;
                            export { nullable_504 as nullable };
                            const write_504: boolean;
                            export { write_504 as write };
                            const read_504: boolean;
                            export { read_504 as read };
                            const validators_297: string[];
                            export { validators_297 as validators };
                            const errorMessages_297: string[];
                            export { errorMessages_297 as errorMessages };
                            const id_609: string;
                            export { id_609 as id };
                            const label_537: string;
                            export { label_537 as label };
                        }
                        export { weeklyPrice_2 as weeklyPrice };
                        export namespace availableFrom_1 {
                            const type_514: string;
                            export { type_514 as type };
                            const nullable_505: boolean;
                            export { nullable_505 as nullable };
                            const write_505: boolean;
                            export { write_505 as write };
                            const read_505: boolean;
                            export { read_505 as read };
                            const id_610: string;
                            export { id_610 as id };
                            const label_538: string;
                            export { label_538 as label };
                        }
                        export { availableFrom_1 as availableFrom };
                        export namespace floorNumber_2 {
                            const type_515: string;
                            export { type_515 as type };
                            const nullable_506: boolean;
                            export { nullable_506 as nullable };
                            const write_506: boolean;
                            export { write_506 as write };
                            const read_506: boolean;
                            export { read_506 as read };
                            const validators_298: string[];
                            export { validators_298 as validators };
                            const errorMessages_298: string[];
                            export { errorMessages_298 as errorMessages };
                            const id_611: string;
                            export { id_611 as id };
                            const label_539: string;
                            export { label_539 as label };
                        }
                        export { floorNumber_2 as floorNumber };
                        export namespace images_6 {
                            const type_516: string;
                            export { type_516 as type };
                            const nullable_507: boolean;
                            export { nullable_507 as nullable };
                            const write_507: boolean;
                            export { write_507 as write };
                            const read_507: boolean;
                            export { read_507 as read };
                            const validators_299: string[];
                            export { validators_299 as validators };
                            const errorMessages_299: string[];
                            export { errorMessages_299 as errorMessages };
                            const id_612: string;
                            export { id_612 as id };
                            const label_540: string;
                            export { label_540 as label };
                        }
                        export { images_6 as images };
                        export namespace currentPlace_25 {
                            const targetClass_117: string;
                            export { targetClass_117 as targetClass };
                            const optionsName_41: string;
                            export { optionsName_41 as optionsName };
                            const type_517: string;
                            export { type_517 as type };
                            const nullable_508: boolean;
                            export { nullable_508 as nullable };
                            const write_508: boolean;
                            export { write_508 as write };
                            const read_508: boolean;
                            export { read_508 as read };
                            const options_41: {
                                id: string;
                                label: string;
                            }[];
                            export { options_41 as options };
                            const validators_300: string[];
                            export { validators_300 as validators };
                            const errorMessages_300: string[];
                            export { errorMessages_300 as errorMessages };
                            const id_613: string;
                            export { id_613 as id };
                            const label_541: string;
                            export { label_541 as label };
                        }
                        export { currentPlace_25 as currentPlace };
                        export namespace requestedTransition_25 {
                            const type_518: string;
                            export { type_518 as type };
                            const nullable_509: boolean;
                            export { nullable_509 as nullable };
                            const write_509: boolean;
                            export { write_509 as write };
                            const read_509: boolean;
                            export { read_509 as read };
                            const id_614: string;
                            export { id_614 as id };
                            const label_542: string;
                            export { label_542 as label };
                        }
                        export { requestedTransition_25 as requestedTransition };
                        export namespace eligibleTransitions_25 {
                            const id_615: string;
                            export { id_615 as id };
                            const label_543: string;
                            export { label_543 as label };
                        }
                        export { eligibleTransitions_25 as eligibleTransitions };
                    }
                    export { model_111 as model };
                    const title_111: string;
                    export { title_111 as title };
                    const resourceName_186: string;
                    export { resourceName_186 as resourceName };
                }
                export { resource_74 as resource };
                const resourceName_187: string;
                export { resourceName_187 as resourceName };
                const validators_301: string[];
                export { validators_301 as validators };
                const errorMessages_301: string[];
                export { errorMessages_301 as errorMessages };
                const id_616: string;
                export { id_616 as id };
                const label_544: string;
                export { label_544 as label };
            }
            export namespace tubeStation {
                const id_617: string;
                export { id_617 as id };
                const label_545: string;
                export { label_545 as label };
            }
            export namespace currentPlace_26 {
                const targetClass_118: string;
                export { targetClass_118 as targetClass };
                const optionsName_42: string;
                export { optionsName_42 as optionsName };
                const type_519: string;
                export { type_519 as type };
                const nullable_510: boolean;
                export { nullable_510 as nullable };
                const write_510: boolean;
                export { write_510 as write };
                const read_510: boolean;
                export { read_510 as read };
                const options_42: {
                    id: string;
                    label: string;
                }[];
                export { options_42 as options };
                const validators_302: string[];
                export { validators_302 as validators };
                const errorMessages_302: string[];
                export { errorMessages_302 as errorMessages };
                const id_618: string;
                export { id_618 as id };
                const label_546: string;
                export { label_546 as label };
            }
            export { currentPlace_26 as currentPlace };
            export namespace hasTopUp {
                const type_520: string;
                export { type_520 as type };
                const nullable_511: boolean;
                export { nullable_511 as nullable };
                const write_511: boolean;
                export { write_511 as write };
                const read_511: boolean;
                export { read_511 as read };
                const validators_303: string[];
                export { validators_303 as validators };
                const errorMessages_303: string[];
                export { errorMessages_303 as errorMessages };
                const id_619: string;
                export { id_619 as id };
                const label_547: string;
                export { label_547 as label };
            }
            export namespace requestedTransition_26 {
                const type_521: string;
                export { type_521 as type };
                const nullable_512: boolean;
                export { nullable_512 as nullable };
                const write_512: boolean;
                export { write_512 as write };
                const read_512: boolean;
                export { read_512 as read };
                const id_620: string;
                export { id_620 as id };
                const label_548: string;
                export { label_548 as label };
            }
            export { requestedTransition_26 as requestedTransition };
            export namespace eligibleTransitions_26 {
                const id_621: string;
                export { id_621 as id };
                const label_549: string;
                export { label_549 as label };
            }
            export { eligibleTransitions_26 as eligibleTransitions };
        }
        export { model_95 as model };
        const title_112: string;
        export { title_112 as title };
        const resourceName_188: string;
        export { resourceName_188 as resourceName };
    }
    export { properties_1 as properties };
    export namespace property_types {
        export namespace model_113 {
            export namespace id_622 {
                const type_522: string;
                export { type_522 as type };
                const nullable_513: boolean;
                export { nullable_513 as nullable };
                const write_513: boolean;
                export { write_513 as write };
                const read_513: boolean;
                export { read_513 as read };
                const validators_304: string[];
                export { validators_304 as validators };
                const errorMessages_304: string[];
                export { errorMessages_304 as errorMessages };
                const id_623: string;
                export { id_623 as id };
                const label_550: string;
                export { label_550 as label };
            }
            export { id_622 as id };
            export namespace description_8 {
                const type_523: string;
                export { type_523 as type };
                const nullable_514: boolean;
                export { nullable_514 as nullable };
                const write_514: boolean;
                export { write_514 as write };
                const read_514: boolean;
                export { read_514 as read };
                const validators_305: string[];
                export { validators_305 as validators };
                const errorMessages_305: string[];
                export { errorMessages_305 as errorMessages };
                const id_624: string;
                export { id_624 as id };
                const label_551: string;
                export { label_551 as label };
            }
            export { description_8 as description };
        }
        export { model_113 as model };
        const title_113: string;
        export { title_113 as title };
        const resourceName_189: string;
        export { resourceName_189 as resourceName };
    }
    export namespace shared_bathrooms {
        const model_114: never[];
        export { model_114 as model };
        const title_114: string;
        export { title_114 as title };
        const resourceName_190: string;
        export { resourceName_190 as resourceName };
    }
    export namespace tube_station {
        export namespace model_115 {
            export namespace id_625 {
                const type_524: string;
                export { type_524 as type };
                const nullable_515: boolean;
                export { nullable_515 as nullable };
                const write_515: boolean;
                export { write_515 as write };
                const read_515: boolean;
                export { read_515 as read };
                const validators_306: string[];
                export { validators_306 as validators };
                const errorMessages_306: string[];
                export { errorMessages_306 as errorMessages };
                const id_626: string;
                export { id_626 as id };
                const label_552: string;
                export { label_552 as label };
            }
            export { id_625 as id };
            export namespace name_22 {
                const type_525: string;
                export { type_525 as type };
                const nullable_516: boolean;
                export { nullable_516 as nullable };
                const write_516: boolean;
                export { write_516 as write };
                const read_516: boolean;
                export { read_516 as read };
                const id_627: string;
                export { id_627 as id };
                const label_553: string;
                export { label_553 as label };
            }
            export { name_22 as name };
        }
        export { model_115 as model };
        const title_115: string;
        export { title_115 as title };
        const resourceName_191: string;
        export { resourceName_191 as resourceName };
    }
    export namespace utilities_1 {
        const model_116: never[];
        export { model_116 as model };
        const title_116: string;
        export { title_116 as title };
        const resourceName_192: string;
        export { resourceName_192 as resourceName };
    }
    export { utilities_1 as utilities };
    export namespace tenants {
        export namespace model_117 {
            export namespace id_628 {
                const type_526: string;
                export { type_526 as type };
                const nullable_517: boolean;
                export { nullable_517 as nullable };
                const write_517: boolean;
                export { write_517 as write };
                const read_517: boolean;
                export { read_517 as read };
                const validators_307: string[];
                export { validators_307 as validators };
                const errorMessages_307: string[];
                export { errorMessages_307 as errorMessages };
                const id_629: string;
                export { id_629 as id };
                const label_554: string;
                export { label_554 as label };
            }
            export { id_628 as id };
            export namespace mainContact_2 {
                const type_527: string;
                export { type_527 as type };
                const nullable_518: boolean;
                export { nullable_518 as nullable };
                const write_518: boolean;
                export { write_518 as write };
                const read_518: boolean;
                export { read_518 as read };
                const id_630: string;
                export { id_630 as id };
                const label_555: string;
                export { label_555 as label };
            }
            export { mainContact_2 as mainContact };
            export namespace personalData_2 {
                const targetClass_119: string;
                export { targetClass_119 as targetClass };
                const type_528: string;
                export { type_528 as type };
                const nullable_519: boolean;
                export { nullable_519 as nullable };
                const write_519: boolean;
                export { write_519 as write };
                const read_519: boolean;
                export { read_519 as read };
                export namespace resource_76 {
                    const model_118: never[];
                    export { model_118 as model };
                    const title_117: string;
                    export { title_117 as title };
                    const resourceName_193: string;
                    export { resourceName_193 as resourceName };
                }
                export { resource_76 as resource };
                const resourceName_194: string;
                export { resourceName_194 as resourceName };
                const validators_308: string[];
                export { validators_308 as validators };
                const errorMessages_308: string[];
                export { errorMessages_308 as errorMessages };
                const id_631: string;
                export { id_631 as id };
                const label_556: string;
                export { label_556 as label };
            }
            export { personalData_2 as personalData };
        }
        export { model_117 as model };
        const title_118: string;
        export { title_118 as title };
        const resourceName_195: string;
        export { resourceName_195 as resourceName };
    }
    export namespace tenant_relationships {
        export namespace model_119 {
            export namespace id_632 {
                const type_529: string;
                export { type_529 as type };
                const nullable_520: boolean;
                export { nullable_520 as nullable };
                const write_520: boolean;
                export { write_520 as write };
                const read_520: boolean;
                export { read_520 as read };
                const validators_309: string[];
                export { validators_309 as validators };
                const errorMessages_309: string[];
                export { errorMessages_309 as errorMessages };
                const id_633: string;
                export { id_633 as id };
                const label_557: string;
                export { label_557 as label };
            }
            export { id_632 as id };
            export namespace tenant {
                const targetClass_120: string;
                export { targetClass_120 as targetClass };
                const type_530: string;
                export { type_530 as type };
                const nullable_521: boolean;
                export { nullable_521 as nullable };
                const write_521: boolean;
                export { write_521 as write };
                const read_521: boolean;
                export { read_521 as read };
                export namespace resource_77 {
                    const model_120: never[];
                    export { model_120 as model };
                    const title_119: string;
                    export { title_119 as title };
                    const resourceName_196: string;
                    export { resourceName_196 as resourceName };
                }
                export { resource_77 as resource };
                const resourceName_197: string;
                export { resourceName_197 as resourceName };
                const optionText_50: string;
                export { optionText_50 as optionText };
                const id_634: string;
                export { id_634 as id };
                const label_558: string;
                export { label_558 as label };
            }
            export namespace firstLandlordTenancy_1 {
                const targetClass_121: string;
                export { targetClass_121 as targetClass };
                const type_531: string;
                export { type_531 as type };
                const nullable_522: boolean;
                export { nullable_522 as nullable };
                const write_522: boolean;
                export { write_522 as write };
                const read_522: boolean;
                export { read_522 as read };
                export namespace resource_78 {
                    const model_121: never[];
                    export { model_121 as model };
                    const title_120: string;
                    export { title_120 as title };
                    const resourceName_198: string;
                    export { resourceName_198 as resourceName };
                }
                export { resource_78 as resource };
                const resourceName_199: string;
                export { resourceName_199 as resourceName };
                const id_635: string;
                export { id_635 as id };
                const label_559: string;
                export { label_559 as label };
            }
            export { firstLandlordTenancy_1 as firstLandlordTenancy };
            export namespace renewals_1 {
                const targetClass_122: string;
                export { targetClass_122 as targetClass };
                const type_532: string;
                export { type_532 as type };
                const nullable_523: boolean;
                export { nullable_523 as nullable };
                const write_523: boolean;
                export { write_523 as write };
                const read_523: boolean;
                export { read_523 as read };
                export namespace resource_79 {
                    const model_122: never[];
                    export { model_122 as model };
                    const title_121: string;
                    export { title_121 as title };
                    const resourceName_200: string;
                    export { resourceName_200 as resourceName };
                }
                export { resource_79 as resource };
                const resourceName_201: string;
                export { resourceName_201 as resourceName };
                const validators_310: string[];
                export { validators_310 as validators };
                const errorMessages_310: string[];
                export { errorMessages_310 as errorMessages };
                const id_636: string;
                export { id_636 as id };
                const label_560: string;
                export { label_560 as label };
            }
            export { renewals_1 as renewals };
        }
        export { model_119 as model };
        const title_122: string;
        export { title_122 as title };
        const resourceName_202: string;
        export { resourceName_202 as resourceName };
    }
    export namespace first_tenant_tenancies {
        const model_123: never[];
        export { model_123 as model };
        const title_123: string;
        export { title_123 as title };
        const resourceName_203: string;
        export { resourceName_203 as resourceName };
    }
    export namespace renewal_tenant_tenancies {
        const model_124: never[];
        export { model_124 as model };
        const title_124: string;
        export { title_124 as title };
        const resourceName_204: string;
        export { resourceName_204 as resourceName };
    }
    export namespace tenant_tenancies {
        export namespace model_125 {
            export namespace id_637 {
                const type_533: string;
                export { type_533 as type };
                const nullable_524: boolean;
                export { nullable_524 as nullable };
                const write_524: boolean;
                export { write_524 as write };
                const read_524: boolean;
                export { read_524 as read };
                const validators_311: string[];
                export { validators_311 as validators };
                const errorMessages_311: string[];
                export { errorMessages_311 as errorMessages };
                const id_638: string;
                export { id_638 as id };
                const label_561: string;
                export { label_561 as label };
            }
            export { id_637 as id };
            export namespace tenantContract_1 {
                const targetClass_123: string;
                export { targetClass_123 as targetClass };
                const type_534: string;
                export { type_534 as type };
                const nullable_525: boolean;
                export { nullable_525 as nullable };
                const write_525: boolean;
                export { write_525 as write };
                const read_525: boolean;
                export { read_525 as read };
                export namespace resource_80 {
                    export namespace model_126 {
                        export namespace witnessSignedFile_5 {
                            const type_535: string;
                            export { type_535 as type };
                            const nullable_526: boolean;
                            export { nullable_526 as nullable };
                            const write_526: boolean;
                            export { write_526 as write };
                            const read_526: boolean;
                            export { read_526 as read };
                            const validators_312: string[];
                            export { validators_312 as validators };
                            const errorMessages_312: string[];
                            export { errorMessages_312 as errorMessages };
                            const id_639: string;
                            export { id_639 as id };
                            const label_562: string;
                            export { label_562 as label };
                        }
                        export { witnessSignedFile_5 as witnessSignedFile };
                        export namespace unsignedFile_11 {
                            const type_536: string;
                            export { type_536 as type };
                            const nullable_527: boolean;
                            export { nullable_527 as nullable };
                            const write_527: boolean;
                            export { write_527 as write };
                            const read_527: boolean;
                            export { read_527 as read };
                            const id_640: string;
                            export { id_640 as id };
                            const label_563: string;
                            export { label_563 as label };
                        }
                        export { unsignedFile_11 as unsignedFile };
                        export namespace issuerSignedFile_11 {
                            const type_537: string;
                            export { type_537 as type };
                            const nullable_528: boolean;
                            export { nullable_528 as nullable };
                            const write_528: boolean;
                            export { write_528 as write };
                            const read_528: boolean;
                            export { read_528 as read };
                            const id_641: string;
                            export { id_641 as id };
                            const label_564: string;
                            export { label_564 as label };
                        }
                        export { issuerSignedFile_11 as issuerSignedFile };
                        export namespace beneficiarySignedFile_11 {
                            const type_538: string;
                            export { type_538 as type };
                            const nullable_529: boolean;
                            export { nullable_529 as nullable };
                            const write_529: boolean;
                            export { write_529 as write };
                            const read_529: boolean;
                            export { read_529 as read };
                            const id_642: string;
                            export { id_642 as id };
                            const label_565: string;
                            export { label_565 as label };
                        }
                        export { beneficiarySignedFile_11 as beneficiarySignedFile };
                    }
                    export { model_126 as model };
                    const title_125: string;
                    export { title_125 as title };
                    const resourceName_205: string;
                    export { resourceName_205 as resourceName };
                }
                export { resource_80 as resource };
                const resourceName_206: string;
                export { resourceName_206 as resourceName };
                const id_643: string;
                export { id_643 as id };
                const label_566: string;
                export { label_566 as label };
            }
            export { tenantContract_1 as tenantContract };
            export namespace unit_1 {
                const targetClass_124: string;
                export { targetClass_124 as targetClass };
                const type_539: string;
                export { type_539 as type };
                const nullable_530: boolean;
                export { nullable_530 as nullable };
                const write_530: boolean;
                export { write_530 as write };
                const read_530: boolean;
                export { read_530 as read };
                export namespace resource_81 {
                    export namespace model_127 {
                        export namespace images_7 {
                            const type_540: string;
                            export { type_540 as type };
                            const nullable_531: boolean;
                            export { nullable_531 as nullable };
                            const write_531: boolean;
                            export { write_531 as write };
                            const read_531: boolean;
                            export { read_531 as read };
                            const validators_313: string[];
                            export { validators_313 as validators };
                            const errorMessages_313: string[];
                            export { errorMessages_313 as errorMessages };
                            const id_644: string;
                            export { id_644 as id };
                            const label_567: string;
                            export { label_567 as label };
                        }
                        export { images_7 as images };
                        export namespace currentPlace_27 {
                            const targetClass_125: string;
                            export { targetClass_125 as targetClass };
                            const optionsName_43: string;
                            export { optionsName_43 as optionsName };
                            const type_541: string;
                            export { type_541 as type };
                            const nullable_532: boolean;
                            export { nullable_532 as nullable };
                            const write_532: boolean;
                            export { write_532 as write };
                            const read_532: boolean;
                            export { read_532 as read };
                            const options_43: {
                                id: string;
                                label: string;
                            }[];
                            export { options_43 as options };
                            const validators_314: string[];
                            export { validators_314 as validators };
                            const errorMessages_314: string[];
                            export { errorMessages_314 as errorMessages };
                            const id_645: string;
                            export { id_645 as id };
                            const label_568: string;
                            export { label_568 as label };
                        }
                        export { currentPlace_27 as currentPlace };
                        export namespace requestedTransition_27 {
                            const type_542: string;
                            export { type_542 as type };
                            const nullable_533: boolean;
                            export { nullable_533 as nullable };
                            const write_533: boolean;
                            export { write_533 as write };
                            const read_533: boolean;
                            export { read_533 as read };
                            const id_646: string;
                            export { id_646 as id };
                            const label_569: string;
                            export { label_569 as label };
                        }
                        export { requestedTransition_27 as requestedTransition };
                        export namespace eligibleTransitions_27 {
                            const id_647: string;
                            export { id_647 as id };
                            const label_570: string;
                            export { label_570 as label };
                        }
                        export { eligibleTransitions_27 as eligibleTransitions };
                    }
                    export { model_127 as model };
                    const title_126: string;
                    export { title_126 as title };
                    const resourceName_207: string;
                    export { resourceName_207 as resourceName };
                }
                export { resource_81 as resource };
                const resourceName_208: string;
                export { resourceName_208 as resourceName };
                const optionText_51: string;
                export { optionText_51 as optionText };
                const id_648: string;
                export { id_648 as id };
                const label_571: string;
                export { label_571 as label };
            }
            export { unit_1 as unit };
            export namespace xeroContactId_4 {
                const type_543: string;
                export { type_543 as type };
                const nullable_534: boolean;
                export { nullable_534 as nullable };
                const write_534: boolean;
                export { write_534 as write };
                const read_534: boolean;
                export { read_534 as read };
                const id_649: string;
                export { id_649 as id };
                const label_572: string;
                export { label_572 as label };
            }
            export { xeroContactId_4 as xeroContactId };
        }
        export { model_125 as model };
        const title_127: string;
        export { title_127 as title };
        const resourceName_209: string;
        export { resourceName_209 as resourceName };
    }
    export namespace transitions {
        const model_128: never[];
        export { model_128 as model };
        const title_128: string;
        export { title_128 as title };
        const resourceName_210: string;
        export { resourceName_210 as resourceName };
    }
    export namespace units_3 {
        export namespace filters_2 {
            const text_4: string[];
            export { text_4 as text };
            const _enum_1: string[];
            export { _enum_1 as enum };
            const boolean_1: string[];
            export { boolean_1 as boolean };
        }
        export { filters_2 as filters };
        export namespace model_129 {
            export namespace id_650 {
                const type_544: string;
                export { type_544 as type };
                const nullable_535: boolean;
                export { nullable_535 as nullable };
                const write_535: boolean;
                export { write_535 as write };
                const read_535: boolean;
                export { read_535 as read };
                const validators_315: string[];
                export { validators_315 as validators };
                const errorMessages_315: string[];
                export { errorMessages_315 as errorMessages };
                const id_651: string;
                export { id_651 as id };
                const label_573: string;
                export { label_573 as label };
            }
            export { id_650 as id };
            export namespace unitLetter_3 {
                const type_545: string;
                export { type_545 as type };
                const nullable_536: boolean;
                export { nullable_536 as nullable };
                const write_536: boolean;
                export { write_536 as write };
                const read_536: boolean;
                export { read_536 as read };
                const validators_316: string[];
                export { validators_316 as validators };
                const errorMessages_316: string[];
                export { errorMessages_316 as errorMessages };
                const id_652: string;
                export { id_652 as id };
                const label_574: string;
                export { label_574 as label };
            }
            export { unitLetter_3 as unitLetter };
            export namespace type_546 {
                const targetClass_126: string;
                export { targetClass_126 as targetClass };
                const type_547: string;
                export { type_547 as type };
                const nullable_537: boolean;
                export { nullable_537 as nullable };
                const write_537: boolean;
                export { write_537 as write };
                const read_537: boolean;
                export { read_537 as read };
                export namespace resource_82 {
                    export namespace model_130 {
                        export namespace id_653 {
                            const type_548: string;
                            export { type_548 as type };
                            const nullable_538: boolean;
                            export { nullable_538 as nullable };
                            const write_538: boolean;
                            export { write_538 as write };
                            const read_538: boolean;
                            export { read_538 as read };
                            const validators_317: string[];
                            export { validators_317 as validators };
                            const errorMessages_317: string[];
                            export { errorMessages_317 as errorMessages };
                            const id_654: string;
                            export { id_654 as id };
                            const label_575: string;
                            export { label_575 as label };
                        }
                        export { id_653 as id };
                        export namespace description_9 {
                            const type_549: string;
                            export { type_549 as type };
                            const nullable_539: boolean;
                            export { nullable_539 as nullable };
                            const write_539: boolean;
                            export { write_539 as write };
                            const read_539: boolean;
                            export { read_539 as read };
                            const validators_318: string[];
                            export { validators_318 as validators };
                            const errorMessages_318: string[];
                            export { errorMessages_318 as errorMessages };
                            const id_655: string;
                            export { id_655 as id };
                            const label_576: string;
                            export { label_576 as label };
                        }
                        export { description_9 as description };
                    }
                    export { model_130 as model };
                    const title_129: string;
                    export { title_129 as title };
                    const resourceName_211: string;
                    export { resourceName_211 as resourceName };
                }
                export { resource_82 as resource };
                const resourceName_212: string;
                export { resourceName_212 as resourceName };
                const optionText_52: string;
                export { optionText_52 as optionText };
                const validators_319: string[];
                export { validators_319 as validators };
                const errorMessages_319: string[];
                export { errorMessages_319 as errorMessages };
                const id_656: string;
                export { id_656 as id };
                const label_577: string;
                export { label_577 as label };
            }
            export { type_546 as type };
            export namespace weeklyPrice_3 {
                const type_550: string;
                export { type_550 as type };
                const nullable_540: boolean;
                export { nullable_540 as nullable };
                const write_540: boolean;
                export { write_540 as write };
                const read_540: boolean;
                export { read_540 as read };
                const validators_320: string[];
                export { validators_320 as validators };
                const errorMessages_320: string[];
                export { errorMessages_320 as errorMessages };
                const id_657: string;
                export { id_657 as id };
                const label_578: string;
                export { label_578 as label };
            }
            export { weeklyPrice_3 as weeklyPrice };
            export namespace availableFrom_2 {
                const type_551: string;
                export { type_551 as type };
                const nullable_541: boolean;
                export { nullable_541 as nullable };
                const write_541: boolean;
                export { write_541 as write };
                const read_541: boolean;
                export { read_541 as read };
                const id_658: string;
                export { id_658 as id };
                const label_579: string;
                export { label_579 as label };
            }
            export { availableFrom_2 as availableFrom };
            export namespace property_1 {
                const targetClass_127: string;
                export { targetClass_127 as targetClass };
                const type_552: string;
                export { type_552 as type };
                const nullable_542: boolean;
                export { nullable_542 as nullable };
                const write_542: boolean;
                export { write_542 as write };
                const read_542: boolean;
                export { read_542 as read };
                export namespace resource_83 {
                    export namespace model_131 {
                        export namespace id_659 {
                            const type_553: string;
                            export { type_553 as type };
                            const nullable_543: boolean;
                            export { nullable_543 as nullable };
                            const write_543: boolean;
                            export { write_543 as write };
                            const read_543: boolean;
                            export { read_543 as read };
                            const validators_321: string[];
                            export { validators_321 as validators };
                            const errorMessages_321: string[];
                            export { errorMessages_321 as errorMessages };
                            const id_660: string;
                            export { id_660 as id };
                            const label_580: string;
                            export { label_580 as label };
                        }
                        export { id_659 as id };
                        export namespace propertyName_2 {
                            const type_554: string;
                            export { type_554 as type };
                            const nullable_544: boolean;
                            export { nullable_544 as nullable };
                            const write_544: boolean;
                            export { write_544 as write };
                            const read_544: boolean;
                            export { read_544 as read };
                            const validators_322: string[];
                            export { validators_322 as validators };
                            const errorMessages_322: string[];
                            export { errorMessages_322 as errorMessages };
                            const id_661: string;
                            export { id_661 as id };
                            const label_581: string;
                            export { label_581 as label };
                        }
                        export { propertyName_2 as propertyName };
                        export namespace floorplans_3 {
                            const type_555: string;
                            export { type_555 as type };
                            const nullable_545: boolean;
                            export { nullable_545 as nullable };
                            const write_545: boolean;
                            export { write_545 as write };
                            const read_545: boolean;
                            export { read_545 as read };
                            const validators_323: string[];
                            export { validators_323 as validators };
                            const errorMessages_323: string[];
                            export { errorMessages_323 as errorMessages };
                            const id_662: string;
                            export { id_662 as id };
                            const label_582: string;
                            export { label_582 as label };
                        }
                        export { floorplans_3 as floorplans };
                        export namespace images_8 {
                            const type_556: string;
                            export { type_556 as type };
                            const nullable_546: boolean;
                            export { nullable_546 as nullable };
                            const write_546: boolean;
                            export { write_546 as write };
                            const read_546: boolean;
                            export { read_546 as read };
                            const validators_324: string[];
                            export { validators_324 as validators };
                            const errorMessages_324: string[];
                            export { errorMessages_324 as errorMessages };
                            const id_663: string;
                            export { id_663 as id };
                            const label_583: string;
                            export { label_583 as label };
                        }
                        export { images_8 as images };
                        export namespace currentPlace_28 {
                            const targetClass_128: string;
                            export { targetClass_128 as targetClass };
                            const optionsName_44: string;
                            export { optionsName_44 as optionsName };
                            const type_557: string;
                            export { type_557 as type };
                            const nullable_547: boolean;
                            export { nullable_547 as nullable };
                            const write_547: boolean;
                            export { write_547 as write };
                            const read_547: boolean;
                            export { read_547 as read };
                            const options_44: {
                                id: string;
                                label: string;
                            }[];
                            export { options_44 as options };
                            const validators_325: string[];
                            export { validators_325 as validators };
                            const errorMessages_325: string[];
                            export { errorMessages_325 as errorMessages };
                            const id_664: string;
                            export { id_664 as id };
                            const label_584: string;
                            export { label_584 as label };
                        }
                        export { currentPlace_28 as currentPlace };
                        export namespace requestedTransition_28 {
                            const type_558: string;
                            export { type_558 as type };
                            const nullable_548: boolean;
                            export { nullable_548 as nullable };
                            const write_548: boolean;
                            export { write_548 as write };
                            const read_548: boolean;
                            export { read_548 as read };
                            const id_665: string;
                            export { id_665 as id };
                            const label_585: string;
                            export { label_585 as label };
                        }
                        export { requestedTransition_28 as requestedTransition };
                        export namespace eligibleTransitions_28 {
                            const id_666: string;
                            export { id_666 as id };
                            const label_586: string;
                            export { label_586 as label };
                        }
                        export { eligibleTransitions_28 as eligibleTransitions };
                    }
                    export { model_131 as model };
                    const title_130: string;
                    export { title_130 as title };
                    const resourceName_213: string;
                    export { resourceName_213 as resourceName };
                }
                export { resource_83 as resource };
                const resourceName_214: string;
                export { resourceName_214 as resourceName };
                const optionText_53: string;
                export { optionText_53 as optionText };
                const validators_326: string[];
                export { validators_326 as validators };
                const errorMessages_326: string[];
                export { errorMessages_326 as errorMessages };
                const id_667: string;
                export { id_667 as id };
                const label_587: string;
                export { label_587 as label };
            }
            export { property_1 as property };
            export namespace floorNumber_3 {
                const type_559: string;
                export { type_559 as type };
                const nullable_549: boolean;
                export { nullable_549 as nullable };
                const write_549: boolean;
                export { write_549 as write };
                const read_549: boolean;
                export { read_549 as read };
                const validators_327: string[];
                export { validators_327 as validators };
                const errorMessages_327: string[];
                export { errorMessages_327 as errorMessages };
                const id_668: string;
                export { id_668 as id };
                const label_588: string;
                export { label_588 as label };
            }
            export { floorNumber_3 as floorNumber };
            export namespace features {
                const targetClass_129: string;
                export { targetClass_129 as targetClass };
                const type_560: string;
                export { type_560 as type };
                const nullable_550: boolean;
                export { nullable_550 as nullable };
                const write_550: boolean;
                export { write_550 as write };
                const read_550: boolean;
                export { read_550 as read };
                export namespace resource_84 {
                    export namespace model_132 {
                        export namespace id_669 {
                            const type_561: string;
                            export { type_561 as type };
                            const nullable_551: boolean;
                            export { nullable_551 as nullable };
                            const write_551: boolean;
                            export { write_551 as write };
                            const read_551: boolean;
                            export { read_551 as read };
                            const validators_328: string[];
                            export { validators_328 as validators };
                            const errorMessages_328: string[];
                            export { errorMessages_328 as errorMessages };
                            const id_670: string;
                            export { id_670 as id };
                            const label_589: string;
                            export { label_589 as label };
                        }
                        export { id_669 as id };
                        export namespace feature {
                            const targetClass_130: string;
                            export { targetClass_130 as targetClass };
                            const type_562: string;
                            export { type_562 as type };
                            const nullable_552: boolean;
                            export { nullable_552 as nullable };
                            const write_552: boolean;
                            export { write_552 as write };
                            const read_552: boolean;
                            export { read_552 as read };
                            export namespace resource_85 {
                                export namespace model_133 {
                                    export namespace id_671 {
                                        const type_563: string;
                                        export { type_563 as type };
                                        const nullable_553: boolean;
                                        export { nullable_553 as nullable };
                                        const write_553: boolean;
                                        export { write_553 as write };
                                        const read_553: boolean;
                                        export { read_553 as read };
                                        const validators_329: string[];
                                        export { validators_329 as validators };
                                        const errorMessages_329: string[];
                                        export { errorMessages_329 as errorMessages };
                                        const id_672: string;
                                        export { id_672 as id };
                                        const label_590: string;
                                        export { label_590 as label };
                                    }
                                    export { id_671 as id };
                                    export namespace name_23 {
                                        const type_564: string;
                                        export { type_564 as type };
                                        const nullable_554: boolean;
                                        export { nullable_554 as nullable };
                                        const write_554: boolean;
                                        export { write_554 as write };
                                        const read_554: boolean;
                                        export { read_554 as read };
                                        const validators_330: string[];
                                        export { validators_330 as validators };
                                        const errorMessages_330: string[];
                                        export { errorMessages_330 as errorMessages };
                                        const id_673: string;
                                        export { id_673 as id };
                                        const label_591: string;
                                        export { label_591 as label };
                                    }
                                    export { name_23 as name };
                                }
                                export { model_133 as model };
                                const title_131: string;
                                export { title_131 as title };
                                const resourceName_215: string;
                                export { resourceName_215 as resourceName };
                            }
                            export { resource_85 as resource };
                            const resourceName_216: string;
                            export { resourceName_216 as resourceName };
                            const optionText_54: string;
                            export { optionText_54 as optionText };
                            const validators_331: string[];
                            export { validators_331 as validators };
                            const errorMessages_331: string[];
                            export { errorMessages_331 as errorMessages };
                            const id_674: string;
                            export { id_674 as id };
                            const label_592: string;
                            export { label_592 as label };
                        }
                        export namespace amount {
                            const type_565: string;
                            export { type_565 as type };
                            const nullable_555: boolean;
                            export { nullable_555 as nullable };
                            const write_555: boolean;
                            export { write_555 as write };
                            const read_555: boolean;
                            export { read_555 as read };
                            const validators_332: string[];
                            export { validators_332 as validators };
                            const errorMessages_332: string[];
                            export { errorMessages_332 as errorMessages };
                            const id_675: string;
                            export { id_675 as id };
                            const label_593: string;
                            export { label_593 as label };
                        }
                    }
                    export { model_132 as model };
                    const title_132: string;
                    export { title_132 as title };
                    const resourceName_217: string;
                    export { resourceName_217 as resourceName };
                }
                export { resource_84 as resource };
                const resourceName_218: string;
                export { resourceName_218 as resourceName };
                const validators_333: string[];
                export { validators_333 as validators };
                const errorMessages_333: string[];
                export { errorMessages_333 as errorMessages };
                const id_676: string;
                export { id_676 as id };
                const label_594: string;
                export { label_594 as label };
            }
            export namespace tenantTenancies {
                const targetClass_131: string;
                export { targetClass_131 as targetClass };
                const type_566: string;
                export { type_566 as type };
                const nullable_556: boolean;
                export { nullable_556 as nullable };
                const write_556: boolean;
                export { write_556 as write };
                const read_556: boolean;
                export { read_556 as read };
                export namespace resource_86 {
                    const model_134: never[];
                    export { model_134 as model };
                    const title_133: string;
                    export { title_133 as title };
                    const resourceName_219: string;
                    export { resourceName_219 as resourceName };
                }
                export { resource_86 as resource };
                const resourceName_220: string;
                export { resourceName_220 as resourceName };
                const validators_334: string[];
                export { validators_334 as validators };
                const errorMessages_334: string[];
                export { errorMessages_334 as errorMessages };
                const id_677: string;
                export { id_677 as id };
                const label_595: string;
                export { label_595 as label };
            }
            export namespace images_9 {
                const type_567: string;
                export { type_567 as type };
                const nullable_557: boolean;
                export { nullable_557 as nullable };
                const write_557: boolean;
                export { write_557 as write };
                const read_557: boolean;
                export { read_557 as read };
                const validators_335: string[];
                export { validators_335 as validators };
                const errorMessages_335: string[];
                export { errorMessages_335 as errorMessages };
                const id_678: string;
                export { id_678 as id };
                const label_596: string;
                export { label_596 as label };
            }
            export { images_9 as images };
            export namespace arthurUnit {
                const targetClass_132: string;
                export { targetClass_132 as targetClass };
                const type_568: string;
                export { type_568 as type };
                const nullable_558: boolean;
                export { nullable_558 as nullable };
                const write_558: boolean;
                export { write_558 as write };
                const read_558: boolean;
                export { read_558 as read };
                export namespace resource_87 {
                    export namespace model_135 {
                        export namespace id_679 {
                            const type_569: string;
                            export { type_569 as type };
                            const nullable_559: boolean;
                            export { nullable_559 as nullable };
                            const write_559: boolean;
                            export { write_559 as write };
                            const read_559: boolean;
                            export { read_559 as read };
                            const validators_336: string[];
                            export { validators_336 as validators };
                            const errorMessages_336: string[];
                            export { errorMessages_336 as errorMessages };
                            const id_680: string;
                            export { id_680 as id };
                            const label_597: string;
                            export { label_597 as label };
                        }
                        export { id_679 as id };
                        export namespace idWp {
                            const type_570: string;
                            export { type_570 as type };
                            const nullable_560: boolean;
                            export { nullable_560 as nullable };
                            const write_560: boolean;
                            export { write_560 as write };
                            const read_560: boolean;
                            export { read_560 as read };
                            const id_681: string;
                            export { id_681 as id };
                            const label_598: string;
                            export { label_598 as label };
                        }
                    }
                    export { model_135 as model };
                    const title_134: string;
                    export { title_134 as title };
                    const resourceName_221: string;
                    export { resourceName_221 as resourceName };
                }
                export { resource_87 as resource };
                const resourceName_222: string;
                export { resourceName_222 as resourceName };
                const id_682: string;
                export { id_682 as id };
                const label_599: string;
                export { label_599 as label };
            }
            export namespace view360 {
                const type_571: string;
                export { type_571 as type };
                const nullable_561: boolean;
                export { nullable_561 as nullable };
                const write_561: boolean;
                export { write_561 as write };
                const read_561: boolean;
                export { read_561 as read };
                const id_683: string;
                export { id_683 as id };
                const label_600: string;
                export { label_600 as label };
            }
            export namespace councilShow {
                const type_572: string;
                export { type_572 as type };
                const nullable_562: boolean;
                export { nullable_562 as nullable };
                const write_562: boolean;
                export { write_562 as write };
                const read_562: boolean;
                export { read_562 as read };
                const validators_337: string[];
                export { validators_337 as validators };
                const errorMessages_337: string[];
                export { errorMessages_337 as errorMessages };
                const id_684: string;
                export { id_684 as id };
                const label_601: string;
                export { label_601 as label };
            }
            export namespace currentPlace_29 {
                const targetClass_133: string;
                export { targetClass_133 as targetClass };
                const optionsName_45: string;
                export { optionsName_45 as optionsName };
                const type_573: string;
                export { type_573 as type };
                const nullable_563: boolean;
                export { nullable_563 as nullable };
                const write_563: boolean;
                export { write_563 as write };
                const read_563: boolean;
                export { read_563 as read };
                const options_45: {
                    id: string;
                    label: string;
                }[];
                export { options_45 as options };
                const validators_338: string[];
                export { validators_338 as validators };
                const errorMessages_338: string[];
                export { errorMessages_338 as errorMessages };
                const id_685: string;
                export { id_685 as id };
                const label_602: string;
                export { label_602 as label };
            }
            export { currentPlace_29 as currentPlace };
            export namespace hasDiscount {
                const type_574: string;
                export { type_574 as type };
                const nullable_564: boolean;
                export { nullable_564 as nullable };
                const write_564: boolean;
                export { write_564 as write };
                const read_564: boolean;
                export { read_564 as read };
                const validators_339: string[];
                export { validators_339 as validators };
                const errorMessages_339: string[];
                export { errorMessages_339 as errorMessages };
                const id_686: string;
                export { id_686 as id };
                const label_603: string;
                export { label_603 as label };
            }
            export namespace notes {
                const type_575: string;
                export { type_575 as type };
                const nullable_565: boolean;
                export { nullable_565 as nullable };
                const write_565: boolean;
                export { write_565 as write };
                const read_565: boolean;
                export { read_565 as read };
                const id_687: string;
                export { id_687 as id };
                const label_604: string;
                export { label_604 as label };
            }
            export namespace portals_1 {
                const targetClass_134: string;
                export { targetClass_134 as targetClass };
                const type_576: string;
                export { type_576 as type };
                const nullable_566: boolean;
                export { nullable_566 as nullable };
                const write_566: boolean;
                export { write_566 as write };
                const read_566: boolean;
                export { read_566 as read };
                export namespace resource_88 {
                    export namespace model_136 {
                        export namespace id_688 {
                            const type_577: string;
                            export { type_577 as type };
                            const nullable_567: boolean;
                            export { nullable_567 as nullable };
                            const write_567: boolean;
                            export { write_567 as write };
                            const read_567: boolean;
                            export { read_567 as read };
                            const validators_340: string[];
                            export { validators_340 as validators };
                            const errorMessages_340: string[];
                            export { errorMessages_340 as errorMessages };
                            const id_689: string;
                            export { id_689 as id };
                            const label_605: string;
                            export { label_605 as label };
                        }
                        export { id_688 as id };
                        export namespace portal_1 {
                            const targetClass_135: string;
                            export { targetClass_135 as targetClass };
                            const type_578: string;
                            export { type_578 as type };
                            const nullable_568: boolean;
                            export { nullable_568 as nullable };
                            const write_568: boolean;
                            export { write_568 as write };
                            const read_568: boolean;
                            export { read_568 as read };
                            export namespace resource_89 {
                                export namespace model_137 {
                                    export namespace id_690 {
                                        const type_579: string;
                                        export { type_579 as type };
                                        const nullable_569: boolean;
                                        export { nullable_569 as nullable };
                                        const write_569: boolean;
                                        export { write_569 as write };
                                        const read_569: boolean;
                                        export { read_569 as read };
                                        const validators_341: string[];
                                        export { validators_341 as validators };
                                        const errorMessages_341: string[];
                                        export { errorMessages_341 as errorMessages };
                                        const id_691: string;
                                        export { id_691 as id };
                                        const label_606: string;
                                        export { label_606 as label };
                                    }
                                    export { id_690 as id };
                                    export namespace name_24 {
                                        const type_580: string;
                                        export { type_580 as type };
                                        const nullable_570: boolean;
                                        export { nullable_570 as nullable };
                                        const write_570: boolean;
                                        export { write_570 as write };
                                        const read_570: boolean;
                                        export { read_570 as read };
                                        const validators_342: string[];
                                        export { validators_342 as validators };
                                        const errorMessages_342: string[];
                                        export { errorMessages_342 as errorMessages };
                                        const id_692: string;
                                        export { id_692 as id };
                                        const label_607: string;
                                        export { label_607 as label };
                                    }
                                    export { name_24 as name };
                                    export namespace discount_2 {
                                        const type_581: string;
                                        export { type_581 as type };
                                        const nullable_571: boolean;
                                        export { nullable_571 as nullable };
                                        const write_571: boolean;
                                        export { write_571 as write };
                                        const read_571: boolean;
                                        export { read_571 as read };
                                        const validators_343: string[];
                                        export { validators_343 as validators };
                                        const errorMessages_343: string[];
                                        export { errorMessages_343 as errorMessages };
                                        const id_693: string;
                                        export { id_693 as id };
                                        const label_608: string;
                                        export { label_608 as label };
                                    }
                                    export { discount_2 as discount };
                                    export namespace url_3 {
                                        const type_582: string;
                                        export { type_582 as type };
                                        const nullable_572: boolean;
                                        export { nullable_572 as nullable };
                                        const write_572: boolean;
                                        export { write_572 as write };
                                        const read_572: boolean;
                                        export { read_572 as read };
                                        const validators_344: string[];
                                        export { validators_344 as validators };
                                        const errorMessages_344: string[];
                                        export { errorMessages_344 as errorMessages };
                                        const id_694: string;
                                        export { id_694 as id };
                                        const label_609: string;
                                        export { label_609 as label };
                                    }
                                    export { url_3 as url };
                                }
                                export { model_137 as model };
                                const title_135: string;
                                export { title_135 as title };
                                const resourceName_223: string;
                                export { resourceName_223 as resourceName };
                            }
                            export { resource_89 as resource };
                            const resourceName_224: string;
                            export { resourceName_224 as resourceName };
                            const optionText_55: string;
                            export { optionText_55 as optionText };
                            const validators_345: string[];
                            export { validators_345 as validators };
                            const errorMessages_345: string[];
                            export { errorMessages_345 as errorMessages };
                            const id_695: string;
                            export { id_695 as id };
                            const label_610: string;
                            export { label_610 as label };
                        }
                        export { portal_1 as portal };
                        export namespace unitDiscount_1 {
                            const type_583: string;
                            export { type_583 as type };
                            const nullable_573: boolean;
                            export { nullable_573 as nullable };
                            const write_573: boolean;
                            export { write_573 as write };
                            const read_573: boolean;
                            export { read_573 as read };
                            const validators_346: string[];
                            export { validators_346 as validators };
                            const errorMessages_346: string[];
                            export { errorMessages_346 as errorMessages };
                            const id_696: string;
                            export { id_696 as id };
                            const label_611: string;
                            export { label_611 as label };
                        }
                        export { unitDiscount_1 as unitDiscount };
                    }
                    export { model_136 as model };
                    const title_136: string;
                    export { title_136 as title };
                    const resourceName_225: string;
                    export { resourceName_225 as resourceName };
                }
                export { resource_88 as resource };
                const resourceName_226: string;
                export { resourceName_226 as resourceName };
                const validators_347: string[];
                export { validators_347 as validators };
                const errorMessages_347: string[];
                export { errorMessages_347 as errorMessages };
                const id_697: string;
                export { id_697 as id };
                const label_612: string;
                export { label_612 as label };
            }
            export { portals_1 as portals };
            export namespace requestedTransition_29 {
                const type_584: string;
                export { type_584 as type };
                const nullable_574: boolean;
                export { nullable_574 as nullable };
                const write_574: boolean;
                export { write_574 as write };
                const read_574: boolean;
                export { read_574 as read };
                const id_698: string;
                export { id_698 as id };
                const label_613: string;
                export { label_613 as label };
            }
            export { requestedTransition_29 as requestedTransition };
            export namespace eligibleTransitions_29 {
                const id_699: string;
                export { id_699 as id };
                const label_614: string;
                export { label_614 as label };
            }
            export { eligibleTransitions_29 as eligibleTransitions };
        }
        export { model_129 as model };
        const title_137: string;
        export { title_137 as title };
        const resourceName_227: string;
        export { resourceName_227 as resourceName };
    }
    export { units_3 as units };
    export namespace unit_features {
        export namespace model_138 {
            export namespace id_700 {
                const type_585: string;
                export { type_585 as type };
                const nullable_575: boolean;
                export { nullable_575 as nullable };
                const write_575: boolean;
                export { write_575 as write };
                const read_575: boolean;
                export { read_575 as read };
                const validators_348: string[];
                export { validators_348 as validators };
                const errorMessages_348: string[];
                export { errorMessages_348 as errorMessages };
                const id_701: string;
                export { id_701 as id };
                const label_615: string;
                export { label_615 as label };
            }
            export { id_700 as id };
            export namespace name_25 {
                const type_586: string;
                export { type_586 as type };
                const nullable_576: boolean;
                export { nullable_576 as nullable };
                const write_576: boolean;
                export { write_576 as write };
                const read_576: boolean;
                export { read_576 as read };
                const validators_349: string[];
                export { validators_349 as validators };
                const errorMessages_349: string[];
                export { errorMessages_349 as errorMessages };
                const id_702: string;
                export { id_702 as id };
                const label_616: string;
                export { label_616 as label };
            }
            export { name_25 as name };
        }
        export { model_138 as model };
        const title_138: string;
        export { title_138 as title };
        const resourceName_228: string;
        export { resourceName_228 as resourceName };
    }
    export namespace unit_feature_lists {
        const model_139: never[];
        export { model_139 as model };
        const title_139: string;
        export { title_139 as title };
        const resourceName_229: string;
        export { resourceName_229 as resourceName };
    }
    export namespace unit_types {
        export namespace model_140 {
            export namespace id_703 {
                const type_587: string;
                export { type_587 as type };
                const nullable_577: boolean;
                export { nullable_577 as nullable };
                const write_577: boolean;
                export { write_577 as write };
                const read_577: boolean;
                export { read_577 as read };
                const validators_350: string[];
                export { validators_350 as validators };
                const errorMessages_350: string[];
                export { errorMessages_350 as errorMessages };
                const id_704: string;
                export { id_704 as id };
                const label_617: string;
                export { label_617 as label };
            }
            export { id_703 as id };
            export namespace description_10 {
                const type_588: string;
                export { type_588 as type };
                const nullable_578: boolean;
                export { nullable_578 as nullable };
                const write_578: boolean;
                export { write_578 as write };
                const read_578: boolean;
                export { read_578 as read };
                const validators_351: string[];
                export { validators_351 as validators };
                const errorMessages_351: string[];
                export { errorMessages_351 as errorMessages };
                const id_705: string;
                export { id_705 as id };
                const label_618: string;
                export { label_618 as label };
            }
            export { description_10 as description };
        }
        export { model_140 as model };
        const title_140: string;
        export { title_140 as title };
        const resourceName_230: string;
        export { resourceName_230 as resourceName };
    }
    export namespace users_1 {
        export namespace model_141 {
            export namespace id_706 {
                const type_589: string;
                export { type_589 as type };
                const nullable_579: boolean;
                export { nullable_579 as nullable };
                const write_579: boolean;
                export { write_579 as write };
                const read_579: boolean;
                export { read_579 as read };
                const validators_352: string[];
                export { validators_352 as validators };
                const errorMessages_352: string[];
                export { errorMessages_352 as errorMessages };
                const id_707: string;
                export { id_707 as id };
                const label_619: string;
                export { label_619 as label };
            }
            export { id_706 as id };
            export namespace email_5 {
                const type_590: string;
                export { type_590 as type };
                const nullable_580: boolean;
                export { nullable_580 as nullable };
                const write_580: boolean;
                export { write_580 as write };
                const read_580: boolean;
                export { read_580 as read };
                const validators_353: string[];
                export { validators_353 as validators };
                const errorMessages_353: string[];
                export { errorMessages_353 as errorMessages };
                const id_708: string;
                export { id_708 as id };
                const label_620: string;
                export { label_620 as label };
            }
            export { email_5 as email };
            export namespace password {
                const type_591: string;
                export { type_591 as type };
                const nullable_581: boolean;
                export { nullable_581 as nullable };
                const write_581: boolean;
                export { write_581 as write };
                const read_581: boolean;
                export { read_581 as read };
                const validators_354: string[];
                export { validators_354 as validators };
                const errorMessages_354: string[];
                export { errorMessages_354 as errorMessages };
                const id_709: string;
                export { id_709 as id };
                const label_621: string;
                export { label_621 as label };
            }
            export namespace name_26 {
                const type_592: string;
                export { type_592 as type };
                const nullable_582: boolean;
                export { nullable_582 as nullable };
                const write_582: boolean;
                export { write_582 as write };
                const read_582: boolean;
                export { read_582 as read };
                const validators_355: string[];
                export { validators_355 as validators };
                const errorMessages_355: string[];
                export { errorMessages_355 as errorMessages };
                const id_710: string;
                export { id_710 as id };
                const label_622: string;
                export { label_622 as label };
            }
            export { name_26 as name };
            export namespace roles {
                const targetClass_136: string;
                export { targetClass_136 as targetClass };
                const optionsName_46: string;
                export { optionsName_46 as optionsName };
                const type_593: string;
                export { type_593 as type };
                const nullable_583: boolean;
                export { nullable_583 as nullable };
                const write_583: boolean;
                export { write_583 as write };
                const read_583: boolean;
                export { read_583 as read };
                const options_46: {
                    id: string;
                    label: string;
                }[];
                export { options_46 as options };
                const validators_356: string[];
                export { validators_356 as validators };
                const errorMessages_356: string[];
                export { errorMessages_356 as errorMessages };
                const id_711: string;
                export { id_711 as id };
                const label_623: string;
                export { label_623 as label };
            }
        }
        export { model_141 as model };
        const title_141: string;
        export { title_141 as title };
        const resourceName_231: string;
        export { resourceName_231 as resourceName };
    }
    export { users_1 as users };
    export namespace arthur_properties {
        const model_142: never[];
        export { model_142 as model };
        const title_142: string;
        export { title_142 as title };
        const resourceName_232: string;
        export { resourceName_232 as resourceName };
    }
    export namespace arthur_units {
        const model_143: never[];
        export { model_143 as model };
        const title_143: string;
        export { title_143 as title };
        const resourceName_233: string;
        export { resourceName_233 as resourceName };
    }
    export namespace invoices {
        export namespace model_144 {
            export namespace id_712 {
                const type_594: string;
                export { type_594 as type };
                const nullable_584: boolean;
                export { nullable_584 as nullable };
                const write_584: boolean;
                export { write_584 as write };
                const read_584: boolean;
                export { read_584 as read };
                const validators_357: string[];
                export { validators_357 as validators };
                const errorMessages_357: string[];
                export { errorMessages_357 as errorMessages };
                const id_713: string;
                export { id_713 as id };
                const label_624: string;
                export { label_624 as label };
            }
            export { id_712 as id };
            export namespace payment_1 {
                const targetClass_137: string;
                export { targetClass_137 as targetClass };
                const type_595: string;
                export { type_595 as type };
                const nullable_585: boolean;
                export { nullable_585 as nullable };
                const write_585: boolean;
                export { write_585 as write };
                const read_585: boolean;
                export { read_585 as read };
                export namespace resource_90 {
                    const model_145: never[];
                    export { model_145 as model };
                    const title_144: string;
                    export { title_144 as title };
                    const resourceName_234: string;
                    export { resourceName_234 as resourceName };
                }
                export { resource_90 as resource };
                const resourceName_235: string;
                export { resourceName_235 as resourceName };
                const optionText_56: string;
                export { optionText_56 as optionText };
                const validators_358: string[];
                export { validators_358 as validators };
                const errorMessages_358: string[];
                export { errorMessages_358 as errorMessages };
                const id_714: string;
                export { id_714 as id };
                const label_625: string;
                export { label_625 as label };
            }
            export { payment_1 as payment };
            export namespace reference {
                const type_596: string;
                export { type_596 as type };
                const nullable_586: boolean;
                export { nullable_586 as nullable };
                const write_586: boolean;
                export { write_586 as write };
                const read_586: boolean;
                export { read_586 as read };
                const validators_359: string[];
                export { validators_359 as validators };
                const errorMessages_359: string[];
                export { errorMessages_359 as errorMessages };
                const id_715: string;
                export { id_715 as id };
                const label_626: string;
                export { label_626 as label };
            }
            export namespace dueTime {
                const type_597: string;
                export { type_597 as type };
                const nullable_587: boolean;
                export { nullable_587 as nullable };
                const write_587: boolean;
                export { write_587 as write };
                const read_587: boolean;
                export { read_587 as read };
                const validators_360: string[];
                export { validators_360 as validators };
                const errorMessages_360: string[];
                export { errorMessages_360 as errorMessages };
                const id_716: string;
                export { id_716 as id };
                const label_627: string;
                export { label_627 as label };
            }
            export namespace status_3 {
                const targetClass_138: string;
                export { targetClass_138 as targetClass };
                const optionsName_47: string;
                export { optionsName_47 as optionsName };
                const type_598: string;
                export { type_598 as type };
                const nullable_588: boolean;
                export { nullable_588 as nullable };
                const write_588: boolean;
                export { write_588 as write };
                const read_588: boolean;
                export { read_588 as read };
                const options_47: {
                    id: number;
                    label: string;
                }[];
                export { options_47 as options };
                const validators_361: string[];
                export { validators_361 as validators };
                const errorMessages_361: string[];
                export { errorMessages_361 as errorMessages };
                const id_717: string;
                export { id_717 as id };
                const label_628: string;
                export { label_628 as label };
            }
            export { status_3 as status };
            export namespace type_599 {
                const targetClass_139: string;
                export { targetClass_139 as targetClass };
                const optionsName_48: string;
                export { optionsName_48 as optionsName };
                const type_600: string;
                export { type_600 as type };
                const nullable_589: boolean;
                export { nullable_589 as nullable };
                const write_589: boolean;
                export { write_589 as write };
                const read_589: boolean;
                export { read_589 as read };
                const options_48: {
                    id: number;
                    label: string;
                }[];
                export { options_48 as options };
                const validators_362: string[];
                export { validators_362 as validators };
                const errorMessages_362: string[];
                export { errorMessages_362 as errorMessages };
                const id_718: string;
                export { id_718 as id };
                const label_629: string;
                export { label_629 as label };
            }
            export { type_599 as type };
            export namespace lineAmountType {
                const type_601: string;
                export { type_601 as type };
                const nullable_590: boolean;
                export { nullable_590 as nullable };
                const write_590: boolean;
                export { write_590 as write };
                const read_590: boolean;
                export { read_590 as read };
                const validators_363: string[];
                export { validators_363 as validators };
                const errorMessages_363: string[];
                export { errorMessages_363 as errorMessages };
                const id_719: string;
                export { id_719 as id };
                const label_630: string;
                export { label_630 as label };
            }
            export namespace contactId {
                const type_602: string;
                export { type_602 as type };
                const nullable_591: boolean;
                export { nullable_591 as nullable };
                const write_591: boolean;
                export { write_591 as write };
                const read_591: boolean;
                export { read_591 as read };
                const validators_364: string[];
                export { validators_364 as validators };
                const errorMessages_364: string[];
                export { errorMessages_364 as errorMessages };
                const id_720: string;
                export { id_720 as id };
                const label_631: string;
                export { label_631 as label };
            }
            export namespace lineItems {
                const targetClass_140: string;
                export { targetClass_140 as targetClass };
                const type_603: string;
                export { type_603 as type };
                const nullable_592: boolean;
                export { nullable_592 as nullable };
                const write_592: boolean;
                export { write_592 as write };
                const read_592: boolean;
                export { read_592 as read };
                export namespace resource_91 {
                    const model_146: never[];
                    export { model_146 as model };
                    const title_145: string;
                    export { title_145 as title };
                    const resourceName_236: string;
                    export { resourceName_236 as resourceName };
                }
                export { resource_91 as resource };
                const resourceName_237: string;
                export { resourceName_237 as resourceName };
                const validators_365: string[];
                export { validators_365 as validators };
                const errorMessages_365: string[];
                export { errorMessages_365 as errorMessages };
                const id_721: string;
                export { id_721 as id };
                const label_632: string;
                export { label_632 as label };
            }
            export namespace xeroInvoiceId_2 {
                const type_604: string;
                export { type_604 as type };
                const nullable_593: boolean;
                export { nullable_593 as nullable };
                const write_593: boolean;
                export { write_593 as write };
                const read_593: boolean;
                export { read_593 as read };
                const validators_366: string[];
                export { validators_366 as validators };
                const errorMessages_366: string[];
                export { errorMessages_366 as errorMessages };
                const id_722: string;
                export { id_722 as id };
                const label_633: string;
                export { label_633 as label };
            }
            export { xeroInvoiceId_2 as xeroInvoiceId };
        }
        export { model_144 as model };
        const title_146: string;
        export { title_146 as title };
        const resourceName_238: string;
        export { resourceName_238 as resourceName };
    }
    export namespace line_items {
        const model_147: never[];
        export { model_147 as model };
        const title_147: string;
        export { title_147 as title };
        const resourceName_239: string;
        export { resourceName_239 as resourceName };
    }
}
