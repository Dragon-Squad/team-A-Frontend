import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateCharityReponseObject } from "@/types/charity";
import { EditCharityDialog } from "./EditCharityDialog";
import { useUpdateCharity } from "@/hooks/use-charity";

function CharityCard({
  id,
  name,
  type,
  category,
  region,
}: updateCharityReponseObject) {
  const { updateCharity } = useUpdateCharity();

  const [charityData, setCharityData] = useState({
    name,
    type,
    category,
    region,
  });

  const handleSaveChanges = (
    name: string,
    type: string,
    category: string[],
    region: string[],
  ) => {
    const updatedCharityData = { name, type, category, region };
    updateCharity(updatedCharityData);

    setCharityData(updatedCharityData);
  };

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
              value={charityData.name}
              disabled
              className="mt-1"
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
              value={charityData.type}
              disabled
              className="mt-1"
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
              value={charityData.category.join(", ")}
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
              value={charityData.region.join(", ")}
              disabled
              className="mt-1 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex">
            <EditCharityDialog
              buttonText="Edit Charity"
              title="Edit Charity"
              buttonStyle="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1"
              submitButtonStyle="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1"
              name={charityData.name}
              type={charityData.type}
              category={charityData.category}
              region={charityData.region}
              onSaveChanges={handleSaveChanges}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default CharityCard;
