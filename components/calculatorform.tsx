import AirCalculator from "./aircbm";
import SeaCalculator from "./seacbm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function CalculatorForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8">
      <Tabs defaultValue="air" className="w-full h-auto max-w-lg mx-auto ">
        <TabsList className="font-medium text-xl mx-12">
          <TabsTrigger value="air">Air Price Estimator</TabsTrigger>
          <TabsTrigger value="sea">Sea Price Estimator</TabsTrigger>
        </TabsList>
        <TabsContent value="air"><AirCalculator /></TabsContent>
        <TabsContent value="sea"><SeaCalculator /></TabsContent>
      </Tabs>
    </div>
  )
}