import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDonorStatistic } from "@/hooks/use-statistic";

function DisplayDonorStatistic() {
  const { statistic, loading, error } = useDonorStatistic();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-60 ml-10">
      {statistic && (
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
                <TableCell>Total Monthly Donations</TableCell>
                <TableCell>{statistic.monthlyDonation ?? 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Projects</TableCell>
                <TableCell>{statistic.projectsDonated ?? 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Donations</TableCell>
                <TableCell>{statistic.totalDonation ?? 0}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default DisplayDonorStatistic;
