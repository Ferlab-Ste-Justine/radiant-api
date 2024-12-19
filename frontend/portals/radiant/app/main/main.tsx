import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/base/ui/accordion"
import Variant from "variant/App";

export function Main() {
  return (
    <main className="flex p-4">
      <Variant api="test"/>
    </main>
  );
}
