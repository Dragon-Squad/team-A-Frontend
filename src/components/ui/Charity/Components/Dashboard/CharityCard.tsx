import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateCharityReponseObject } from "@/types/charity";

function CharityCard({
  id,
  name,
  type,
  category,
  region,
}: updateCharityReponseObject) {
  return (
    <Card
      key={id}
      className="p-6 shadow-md border rounded-lg w-full max-w-3xl mx-auto"
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-800">
          Charity Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Charity Name
            </Label>
            <Input
              id="name"
              value={name}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </Label>
            <Input
              id="type"
              value={type}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categories
            </Label>
            <Input
              id="category"
              value={category.join(", ")}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              Regions
            </Label>
            <Input
              id="region"
              value={region.join(", ")}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex ">
            <Button variant="outline" size="sm" className="text-blue-600">
              Edit Charity
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default CharityCard;
