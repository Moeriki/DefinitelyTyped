import { Handler } from "../handler";

export type CloudFormationMacroHandler = Handler<CloudFormationMacroEvent, CloudFormationMacroResult>;

export interface CloudFormationMacroEvent {
    region: string;
    accountId: string;
    fragment: JSON;
    transformId: string;
    params: Record<string, number | string | undefined>;
    requestId: string;
    templateParameterValues: Record<string, number | string | undefined>;
}

export interface CloudFormationMacroResult {
    requestId: string;
    status: string;
    fragment: JSON;
}
