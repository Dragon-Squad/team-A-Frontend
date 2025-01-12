import { useFetchCharityByKeyword } from "@/hooks/use-charity";
import { Button } from "@headlessui/react";
import React from "react";

function ProjectDisplayPage() {
  const { FetchCharityByKeyword } = useFetchCharityByKeyword();
  const handleSearchClick = () => {
    FetchCharityByKeyword("s");
  };
  return (
    <Button onClick={handleSearchClick} className={"bg-orange-100"}>
      Hello
    </Button>
  );
}

export default ProjectDisplayPage;
