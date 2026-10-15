import {renderResearchIdeas} from '../../lib/research-ideas.mjs';

type Bundle = Parameters<typeof renderResearchIdeas>[0];
export default function ResearchIdeasPanel({data,date,compact=false,sectionId='research-ideas'}:{data:Bundle;date:string;compact?:boolean;sectionId?:string}) {
  return <div dangerouslySetInnerHTML={{__html:renderResearchIdeas(data,date,{compact,sectionId})}}/>;
}
