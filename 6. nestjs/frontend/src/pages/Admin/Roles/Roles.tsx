import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Roles() {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    const getRoles = async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_API}/roles`);
      const data = await response.json();
      setRoles(data);
    };
    getRoles();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold">Roles</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map(
            (
              role: { id: number; name: string; status: boolean },
              index: number
            ) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.status ? "Active" : "Inactive"}</TableCell>
                <TableCell className="flex gap-2 justify-end">
                  <Button className="cursor-pointer">
                    <Link to={`/admin/roles/${role.id}`}>
                      <SquarePen />
                    </Link>
                  </Button>
                  <Button className="cursor-pointer" variant={"destructive"}>
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  );
}
