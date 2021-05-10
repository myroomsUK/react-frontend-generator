export default function IterableFormContent({ model: embeddableModel, resourceName, resource, parentFormValue, partialSubmitHandler, setParentFormValue, formValueArray, label, errors, single, submitHandler, form, referencesMap, refreshReferencesMap, modifyOnlyLastElement, modifyRule }: {
    model: any;
    resourceName: any;
    resource: any;
    parentFormValue: any;
    partialSubmitHandler: any;
    setParentFormValue: any;
    formValueArray: any;
    label: any;
    errors: any;
    single?: boolean | undefined;
    submitHandler: any;
    form: any;
    referencesMap: any;
    refreshReferencesMap: any;
    modifyOnlyLastElement?: boolean | undefined;
    modifyRule?: (() => boolean) | undefined;
}): JSX.Element;
