export namespace overrideRegistry {
    namespace properties {
        namespace model {
            namespace propertyName {
                const xs: number;
                const md: number;
                const group: string;
                const position: number;
                const listShow: boolean;
                const label: string;
            }
            namespace area {
                const xs_1: number;
                export { xs_1 as xs };
                const md_1: number;
                export { md_1 as md };
                const group_1: string;
                export { group_1 as group };
                const position_1: number;
                export { position_1 as position };
                const label_1: string;
                export { label_1 as label };
                const listShow_1: boolean;
                export { listShow_1 as listShow };
            }
            namespace askedPrice {
                const type: string;
            }
            namespace currentPlace {
                const listShow_2: boolean;
                export { listShow_2 as listShow };
                const label_2: string;
                export { label_2 as label };
            }
        }
        const table: {
            id: string;
            label: string;
        }[];
        const formType: string;
    }
    namespace areas {
        export namespace model_1 {
            export namespace name {
                const listShow_3: boolean;
                export { listShow_3 as listShow };
            }
            export namespace properties_1 {
                const listShow_4: boolean;
                export { listShow_4 as listShow };
            }
            export { properties_1 as properties };
        }
        export { model_1 as model };
    }
    namespace agents {
        export namespace model_2 {
            namespace fullName {
                const label_3: string;
                export { label_3 as label };
                const md_2: number;
                export { md_2 as md };
            }
        }
        export { model_2 as model };
    }
    namespace units {
        export namespace model_3 {
            export namespace currentPlace_1 {
                const label_4: string;
                export { label_4 as label };
            }
            export { currentPlace_1 as currentPlace };
        }
        export { model_3 as model };
        const table_1: {
            id: string;
            label: string;
        }[];
        export { table_1 as table };
        export const tableActions: {
            label: string;
            icon: {
                type: {
                    type: {};
                    compare: null;
                };
                key: null;
                ref: null;
                props: {};
                _owner: null;
                _store: {};
            };
        }[];
    }
    namespace landlords {
        export namespace model_4 {
            namespace personalData {
                namespace resource {
                    export namespace model_5 {
                        namespace telephone {
                            const type_1: string;
                            export { type_1 as type };
                        }
                        namespace mobile {
                            const type_2: string;
                            export { type_2 as type };
                        }
                    }
                    export { model_5 as model };
                }
            }
        }
        export { model_4 as model };
        const table_2: {
            id: string;
            label: string;
        }[];
        export { table_2 as table };
    }
    namespace landlord_properties {
        export namespace model_6 {
            namespace property {
                namespace form {
                    const key: null;
                    const ref: null;
                    const props: {};
                    const _owner: null;
                    const _store: {};
                }
            }
        }
        export { model_6 as model };
    }
    namespace landlord_contracts {
        export namespace model_7 {
            namespace startDate {
                const listShow_5: boolean;
                export { listShow_5 as listShow };
            }
            namespace endDate {
                const listShow_6: boolean;
                export { listShow_6 as listShow };
            }
        }
        export { model_7 as model };
    }
    namespace bank_accounts {
        export namespace model_8 {
            namespace accountName {
                const listShow_7: boolean;
                export { listShow_7 as listShow };
            }
            namespace bankName {
                const listShow_8: boolean;
                export { listShow_8 as listShow };
            }
        }
        export { model_8 as model };
    }
    namespace contracts {
        export namespace model_9 {
            export namespace startDate_1 {
                const listShow_9: boolean;
                export { listShow_9 as listShow };
            }
            export { startDate_1 as startDate };
            export namespace endDate_1 {
                const listShow_10: boolean;
                export { listShow_10 as listShow };
            }
            export { endDate_1 as endDate };
        }
        export { model_9 as model };
    }
    namespace landlord_tenancies {
        export namespace model_10 {
            namespace contract {
                export namespace form_1 {
                    const key_1: null;
                    export { key_1 as key };
                    const ref_1: null;
                    export { ref_1 as ref };
                    const props_1: {};
                    export { props_1 as props };
                    const _owner_1: null;
                    export { _owner_1 as _owner };
                    const _store_1: {};
                    export { _store_1 as _store };
                }
                export { form_1 as form };
            }
            namespace payments {
                const listShow_11: boolean;
                export { listShow_11 as listShow };
                const type_3: string;
                export { type_3 as type };
                export const cardinality: string;
                export const resourceName: string;
                const xs_2: number;
                export { xs_2 as xs };
                const md_3: number;
                export { md_3 as md };
                const label_5: string;
                export { label_5 as label };
                const group_2: string;
                export { group_2 as group };
                const position_2: number;
                export { position_2 as position };
            }
        }
        export { model_10 as model };
    }
    namespace landlord_tenancy_payments {
        const table_3: {
            id: string;
            label: string;
        }[];
        export { table_3 as table };
    }
    namespace default_payment_items {
        export namespace model_11 {
            export namespace name_1 {
                const listShow_12: boolean;
                export { listShow_12 as listShow };
                const label_6: string;
                export { label_6 as label };
            }
            export { name_1 as name };
            export namespace fee {
                const listShow_13: boolean;
                export { listShow_13 as listShow };
                const label_7: string;
                export { label_7 as label };
                export namespace adornment {
                    export namespace type_4 {
                        const propTypes: {};
                        namespace Naked {
                            const propTypes_1: {};
                            export { propTypes_1 as propTypes };
                        }
                        namespace options {
                            export namespace defaultTheme {
                                export namespace breakpoints {
                                    const keys: string[];
                                    namespace values {
                                        const xs_3: number;
                                        export { xs_3 as xs };
                                        export const sm: number;
                                        const md_4: number;
                                        export { md_4 as md };
                                        export const lg: number;
                                        export const xl: number;
                                    }
                                }
                                export const direction: string;
                                export namespace mixins {
                                    const toolbar: {
                                        minHeight: number;
                                        "@media (min-width:0px) and (orientation: landscape)": {
                                            minHeight: number;
                                        };
                                        "@media (min-width:600px)": {
                                            minHeight: number;
                                        };
                                    };
                                }
                                export const overrides: {};
                                export namespace palette {
                                    export namespace common {
                                        const black: string;
                                        const white: string;
                                    }
                                    const type_5: string;
                                    export { type_5 as type };
                                    export namespace primary {
                                        const light: string;
                                        const main: string;
                                        const dark: string;
                                        const contrastText: string;
                                    }
                                    export namespace secondary {
                                        const light_1: string;
                                        export { light_1 as light };
                                        const main_1: string;
                                        export { main_1 as main };
                                        const dark_1: string;
                                        export { dark_1 as dark };
                                        const contrastText_1: string;
                                        export { contrastText_1 as contrastText };
                                    }
                                    export namespace error {
                                        const light_2: string;
                                        export { light_2 as light };
                                        const main_2: string;
                                        export { main_2 as main };
                                        const dark_2: string;
                                        export { dark_2 as dark };
                                        const contrastText_2: string;
                                        export { contrastText_2 as contrastText };
                                    }
                                    export namespace warning {
                                        const light_3: string;
                                        export { light_3 as light };
                                        const main_3: string;
                                        export { main_3 as main };
                                        const dark_3: string;
                                        export { dark_3 as dark };
                                        const contrastText_3: string;
                                        export { contrastText_3 as contrastText };
                                    }
                                    export namespace info {
                                        const light_4: string;
                                        export { light_4 as light };
                                        const main_4: string;
                                        export { main_4 as main };
                                        const dark_4: string;
                                        export { dark_4 as dark };
                                        const contrastText_4: string;
                                        export { contrastText_4 as contrastText };
                                    }
                                    export namespace success {
                                        const light_5: string;
                                        export { light_5 as light };
                                        const main_5: string;
                                        export { main_5 as main };
                                        const dark_5: string;
                                        export { dark_5 as dark };
                                        const contrastText_5: string;
                                        export { contrastText_5 as contrastText };
                                    }
                                    export const grey: {
                                        "50": string;
                                        "100": string;
                                        "200": string;
                                        "300": string;
                                        "400": string;
                                        "500": string;
                                        "600": string;
                                        "700": string;
                                        "800": string;
                                        "900": string;
                                        A100: string;
                                        A200: string;
                                        A400: string;
                                        A700: string;
                                    };
                                    export const contrastThreshold: number;
                                    export const tonalOffset: number;
                                    export namespace text {
                                        const primary_1: string;
                                        export { primary_1 as primary };
                                        const secondary_1: string;
                                        export { secondary_1 as secondary };
                                        export const disabled: string;
                                        export const hint: string;
                                    }
                                    export const divider: string;
                                    export namespace background {
                                        export const paper: string;
                                        const _default: string;
                                        export { _default as default };
                                    }
                                    export namespace action {
                                        export const active: string;
                                        export const hover: string;
                                        export const hoverOpacity: number;
                                        export const selected: string;
                                        export const selectedOpacity: number;
                                        const disabled_1: string;
                                        export { disabled_1 as disabled };
                                        export const disabledBackground: string;
                                        export const disabledOpacity: number;
                                        export const focus: string;
                                        export const focusOpacity: number;
                                        export const activatedOpacity: number;
                                    }
                                }
                                const props_2: {};
                                export { props_2 as props };
                                export const shadows: string[];
                                export namespace typography {
                                    const htmlFontSize: number;
                                    const fontFamily: string;
                                    const fontSize: number;
                                    const fontWeightLight: number;
                                    const fontWeightRegular: number;
                                    const fontWeightMedium: number;
                                    const fontWeightBold: number;
                                    namespace h1 {
                                        const fontFamily_1: string;
                                        export { fontFamily_1 as fontFamily };
                                        export const fontWeight: number;
                                        const fontSize_1: string;
                                        export { fontSize_1 as fontSize };
                                        export const lineHeight: number;
                                        export const letterSpacing: string;
                                    }
                                    namespace h2 {
                                        const fontFamily_2: string;
                                        export { fontFamily_2 as fontFamily };
                                        const fontWeight_1: number;
                                        export { fontWeight_1 as fontWeight };
                                        const fontSize_2: string;
                                        export { fontSize_2 as fontSize };
                                        const lineHeight_1: number;
                                        export { lineHeight_1 as lineHeight };
                                        const letterSpacing_1: string;
                                        export { letterSpacing_1 as letterSpacing };
                                    }
                                    namespace h3 {
                                        const fontFamily_3: string;
                                        export { fontFamily_3 as fontFamily };
                                        const fontWeight_2: number;
                                        export { fontWeight_2 as fontWeight };
                                        const fontSize_3: string;
                                        export { fontSize_3 as fontSize };
                                        const lineHeight_2: number;
                                        export { lineHeight_2 as lineHeight };
                                        const letterSpacing_2: string;
                                        export { letterSpacing_2 as letterSpacing };
                                    }
                                    namespace h4 {
                                        const fontFamily_4: string;
                                        export { fontFamily_4 as fontFamily };
                                        const fontWeight_3: number;
                                        export { fontWeight_3 as fontWeight };
                                        const fontSize_4: string;
                                        export { fontSize_4 as fontSize };
                                        const lineHeight_3: number;
                                        export { lineHeight_3 as lineHeight };
                                        const letterSpacing_3: string;
                                        export { letterSpacing_3 as letterSpacing };
                                    }
                                    namespace h5 {
                                        const fontFamily_5: string;
                                        export { fontFamily_5 as fontFamily };
                                        const fontWeight_4: number;
                                        export { fontWeight_4 as fontWeight };
                                        const fontSize_5: string;
                                        export { fontSize_5 as fontSize };
                                        const lineHeight_4: number;
                                        export { lineHeight_4 as lineHeight };
                                        const letterSpacing_4: string;
                                        export { letterSpacing_4 as letterSpacing };
                                    }
                                    namespace h6 {
                                        const fontFamily_6: string;
                                        export { fontFamily_6 as fontFamily };
                                        const fontWeight_5: number;
                                        export { fontWeight_5 as fontWeight };
                                        const fontSize_6: string;
                                        export { fontSize_6 as fontSize };
                                        const lineHeight_5: number;
                                        export { lineHeight_5 as lineHeight };
                                        const letterSpacing_5: string;
                                        export { letterSpacing_5 as letterSpacing };
                                    }
                                    namespace subtitle1 {
                                        const fontFamily_7: string;
                                        export { fontFamily_7 as fontFamily };
                                        const fontWeight_6: number;
                                        export { fontWeight_6 as fontWeight };
                                        const fontSize_7: string;
                                        export { fontSize_7 as fontSize };
                                        const lineHeight_6: number;
                                        export { lineHeight_6 as lineHeight };
                                        const letterSpacing_6: string;
                                        export { letterSpacing_6 as letterSpacing };
                                    }
                                    namespace subtitle2 {
                                        const fontFamily_8: string;
                                        export { fontFamily_8 as fontFamily };
                                        const fontWeight_7: number;
                                        export { fontWeight_7 as fontWeight };
                                        const fontSize_8: string;
                                        export { fontSize_8 as fontSize };
                                        const lineHeight_7: number;
                                        export { lineHeight_7 as lineHeight };
                                        const letterSpacing_7: string;
                                        export { letterSpacing_7 as letterSpacing };
                                    }
                                    namespace body1 {
                                        const fontFamily_9: string;
                                        export { fontFamily_9 as fontFamily };
                                        const fontWeight_8: number;
                                        export { fontWeight_8 as fontWeight };
                                        const fontSize_9: string;
                                        export { fontSize_9 as fontSize };
                                        const lineHeight_8: number;
                                        export { lineHeight_8 as lineHeight };
                                        const letterSpacing_8: string;
                                        export { letterSpacing_8 as letterSpacing };
                                    }
                                    namespace body2 {
                                        const fontFamily_10: string;
                                        export { fontFamily_10 as fontFamily };
                                        const fontWeight_9: number;
                                        export { fontWeight_9 as fontWeight };
                                        const fontSize_10: string;
                                        export { fontSize_10 as fontSize };
                                        const lineHeight_9: number;
                                        export { lineHeight_9 as lineHeight };
                                        const letterSpacing_9: string;
                                        export { letterSpacing_9 as letterSpacing };
                                    }
                                    namespace button {
                                        const fontFamily_11: string;
                                        export { fontFamily_11 as fontFamily };
                                        const fontWeight_10: number;
                                        export { fontWeight_10 as fontWeight };
                                        const fontSize_11: string;
                                        export { fontSize_11 as fontSize };
                                        const lineHeight_10: number;
                                        export { lineHeight_10 as lineHeight };
                                        const letterSpacing_10: string;
                                        export { letterSpacing_10 as letterSpacing };
                                        export const textTransform: string;
                                    }
                                    namespace caption {
                                        const fontFamily_12: string;
                                        export { fontFamily_12 as fontFamily };
                                        const fontWeight_11: number;
                                        export { fontWeight_11 as fontWeight };
                                        const fontSize_12: string;
                                        export { fontSize_12 as fontSize };
                                        const lineHeight_11: number;
                                        export { lineHeight_11 as lineHeight };
                                        const letterSpacing_11: string;
                                        export { letterSpacing_11 as letterSpacing };
                                    }
                                    namespace overline {
                                        const fontFamily_13: string;
                                        export { fontFamily_13 as fontFamily };
                                        const fontWeight_12: number;
                                        export { fontWeight_12 as fontWeight };
                                        const fontSize_13: string;
                                        export { fontSize_13 as fontSize };
                                        const lineHeight_12: number;
                                        export { lineHeight_12 as lineHeight };
                                        const letterSpacing_12: string;
                                        export { letterSpacing_12 as letterSpacing };
                                        const textTransform_1: string;
                                        export { textTransform_1 as textTransform };
                                    }
                                }
                                export namespace shape {
                                    const borderRadius: number;
                                }
                                export namespace transitions {
                                    namespace easing {
                                        const easeInOut: string;
                                        const easeOut: string;
                                        const easeIn: string;
                                        const sharp: string;
                                    }
                                    namespace duration {
                                        const shortest: number;
                                        const shorter: number;
                                        const short: number;
                                        const standard: number;
                                        const complex: number;
                                        const enteringScreen: number;
                                        const leavingScreen: number;
                                    }
                                }
                                export namespace zIndex {
                                    const mobileStepper: number;
                                    const speedDial: number;
                                    const appBar: number;
                                    const drawer: number;
                                    const modal: number;
                                    const snackbar: number;
                                    const tooltip: number;
                                }
                            }
                            const name_2: string;
                            export { name_2 as name };
                        }
                    }
                    export { type_4 as type };
                    const key_2: null;
                    export { key_2 as key };
                    const ref_2: null;
                    export { ref_2 as ref };
                    export namespace props_3 {
                        const position_3: string;
                        export { position_3 as position };
                        export const children: string;
                    }
                    export { props_3 as props };
                    const _owner_2: null;
                    export { _owner_2 as _owner };
                    const _store_2: {};
                    export { _store_2 as _store };
                }
            }
        }
        export { model_11 as model };
    }
    namespace negotiations {
        export namespace model_12 {
            namespace negotiationOffers {
                export namespace form_2 {
                    const key_3: null;
                    export { key_3 as key };
                    const ref_3: null;
                    export { ref_3 as ref };
                    const props_4: {};
                    export { props_4 as props };
                    const _owner_3: null;
                    export { _owner_3 as _owner };
                    const _store_3: {};
                    export { _store_3 as _store };
                }
                export { form_2 as form };
                export const modifyOnlyLastElement: boolean;
            }
        }
        export { model_12 as model };
    }
    namespace landlord_relationships {
        export namespace model_13 {
            export namespace property_1 {
                export const id: string;
                const label_8: string;
                export { label_8 as label };
                const type_6: string;
                export { type_6 as type };
                const resourceName_1: string;
                export { resourceName_1 as resourceName };
                const cardinality_1: number;
                export { cardinality_1 as cardinality };
                const form_3: JSX.Element;
                export { form_3 as form };
                export namespace resource_1 {
                    export namespace model_14 {
                        export namespace propertyName_1 {
                            const xs_4: number;
                            export { xs_4 as xs };
                            const md_5: number;
                            export { md_5 as md };
                            const group_3: string;
                            export { group_3 as group };
                            const position_4: number;
                            export { position_4 as position };
                            const listShow_14: boolean;
                            export { listShow_14 as listShow };
                            const label_9: string;
                            export { label_9 as label };
                        }
                        export { propertyName_1 as propertyName };
                        export namespace area_1 {
                            const xs_5: number;
                            export { xs_5 as xs };
                            const md_6: number;
                            export { md_6 as md };
                            const group_4: string;
                            export { group_4 as group };
                            const position_5: number;
                            export { position_5 as position };
                            const label_10: string;
                            export { label_10 as label };
                            const listShow_15: boolean;
                            export { listShow_15 as listShow };
                        }
                        export { area_1 as area };
                        export namespace askedPrice_1 {
                            const type_7: string;
                            export { type_7 as type };
                        }
                        export { askedPrice_1 as askedPrice };
                        export namespace currentPlace_2 {
                            const listShow_16: boolean;
                            export { listShow_16 as listShow };
                            const label_11: string;
                            export { label_11 as label };
                        }
                        export { currentPlace_2 as currentPlace };
                    }
                    export { model_14 as model };
                    const table_4: {
                        id: string;
                        label: string;
                    }[];
                    export { table_4 as table };
                    const formType_1: string;
                    export { formType_1 as formType };
                }
                export { resource_1 as resource };
            }
            export { property_1 as property };
            export namespace landlord {
                const id_1: string;
                export { id_1 as id };
                const label_12: string;
                export { label_12 as label };
                const type_8: string;
                export { type_8 as type };
                const resourceName_2: string;
                export { resourceName_2 as resourceName };
                const cardinality_2: number;
                export { cardinality_2 as cardinality };
                export namespace resource_2 {
                    export namespace model_15 {
                        export namespace personalData_1 {
                            export namespace resource_3 {
                                export namespace model_16 {
                                    export namespace telephone_1 {
                                        const type_9: string;
                                        export { type_9 as type };
                                    }
                                    export { telephone_1 as telephone };
                                    export namespace mobile_1 {
                                        const type_10: string;
                                        export { type_10 as type };
                                    }
                                    export { mobile_1 as mobile };
                                }
                                export { model_16 as model };
                            }
                            export { resource_3 as resource };
                        }
                        export { personalData_1 as personalData };
                    }
                    export { model_15 as model };
                    const table_5: {
                        id: string;
                        label: string;
                    }[];
                    export { table_5 as table };
                }
                export { resource_2 as resource };
            }
            export namespace firstLandlordTenancy {
                const listShow_17: boolean;
                export { listShow_17 as listShow };
                export const optionText: string;
            }
        }
        export { model_13 as model };
        const table_6: {
            id: string;
            label: string;
        }[];
        export { table_6 as table };
    }
    namespace first_landlord_tenancies {
        export namespace model_17 {
            namespace holdingDepositContract {
                export namespace form_4 {
                    const key_4: null;
                    export { key_4 as key };
                    const ref_4: null;
                    export { ref_4 as ref };
                    const props_5: {};
                    export { props_5 as props };
                    const _owner_4: null;
                    export { _owner_4 as _owner };
                    const _store_4: {};
                    export { _store_4 as _store };
                }
                export { form_4 as form };
            }
        }
        export { model_17 as model };
    }
    namespace portals {
        const table_7: {
            id: string;
            label: string;
        }[];
        export { table_7 as table };
    }
    namespace users {
        const table_8: {
            id: string;
            label: string;
        }[];
        export { table_8 as table };
    }
    namespace invoices {
        const table_9: {
            id: string;
            label: string;
        }[];
        export { table_9 as table };
    }
    const renewal_landlord_tenancies: {};
}
