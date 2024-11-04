import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PriceRange {
  min: number;
  max: number;
  currency: string;
}

interface PriceFactor {
  name: string;
  impact: "Low" | "Medium" | "High";
  description: string;
  additionalCost: PriceRange;
}

interface PriceGuideTableProps {
  basePrice: PriceRange;
  factors: PriceFactor[];
  lastUpdated: string;
}

export function PriceGuideTable({
  basePrice,
  factors,
  lastUpdated,
}: PriceGuideTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Price Guide</h2>
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">Base Price Range</p>
          <p className="text-2xl font-semibold">
            {basePrice.currency}{basePrice.min} - {basePrice.currency}{basePrice.max}
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Factor</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Additional Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {factors.map((factor, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div>
                    <p className="font-medium">{factor.name}</p>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                    ${factor.impact === 'High' ? 'bg-red-100 text-red-700' :
                      factor.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'}`}>
                    {factor.impact}
                  </span>
                </TableCell>
                <TableCell>
                  {factor.additionalCost.currency}{factor.additionalCost.min} - {factor.additionalCost.currency}{factor.additionalCost.max}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-muted-foreground mt-4">
          Last updated: {lastUpdated}
        </p>
      </div>
    </div>
  );
}