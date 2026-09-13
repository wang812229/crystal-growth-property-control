export type GrowthRecipe={material:string;actualComposition:string;method:string;transportAgent:string;flux:string;ratio:string;purity:string;vessel:string;atmosphere:string;sourceTemperature:string;growthTemperature:string;peakTemperature:string;holdTime:string;coolingRate:string;postTreatment:string;crystalSize:string;yield:string;qualityMetrics:string[];completeness:{reported:number;total:number;ratio:number}};
export type EvidenceSegment={id:string;title:string;text:string;type:'直接观察'|'模型拟合'|'作者推断'|'本站判断'};
export function extractGrowthRecipe(paper:unknown):GrowthRecipe;
export function buildEvidenceSegments(paper:unknown):EvidenceSegment[];
export function evidenceProfile(paper:unknown):{fullText:string;sampleCredibility:string;reproducibility:string;physicalEvidence:string;certainty:string};
export function parseNaturalLanguageQuery(input:string,today?:Date):{original:string;filters:{field:string;value:string;label:string}[]};
export function similarityReasons(a:unknown,b:unknown):{reasons:string[];conflict:boolean};
export function exportFurnacePlan(paper:unknown):string;
