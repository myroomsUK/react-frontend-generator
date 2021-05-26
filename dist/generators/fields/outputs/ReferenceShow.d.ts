/// <reference types="react" />
import { ReferenceModel } from "../../../resource-models/propertyModels/ReferenceModel";
export default function ReferenceShow({ propertyModel, propertyRecord }: ReferenceOutput): JSX.Element;
interface ReferenceOutput {
    propertyModel: ReferenceModel;
    propertyRecord: Map<string, any> | number;
}
export {};
