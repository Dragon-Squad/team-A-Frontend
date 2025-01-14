import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCharityStatistic } from "@/hooks/use-statistic";

function DisplayCharityStatistic() {
  const { CharityStatistic, loading, error } = useCharityStatistic();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="m-60">Error: {error}</div>;
  }

  return (
    <div className="mt-60 ml-10">
      {CharityStatistic && (
        <div>
          <h2>Donor Statistics</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Total Donations</TableCell>
                <TableCell>{CharityStatistic.totalDonations ?? 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Projects</TableCell>
                <TableCell>{CharityStatistic.totalProjects ?? 0}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default DisplayCharityStatistic;
