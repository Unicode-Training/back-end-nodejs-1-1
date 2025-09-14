import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import modules from "../../../data/modules.json";
import { useParams } from "react-router-dom";
import { hasPermission } from "../../../lib/utils";
import { toast } from "sonner";
type Role = {
  id: number;
  name: string;
  status: number;
  permissions: {
    id: number;
    name: string;
    status: number;
  }[];
};
export default function EditRole() {
  const { id } = useParams();
  const [role, setRole] = useState<null | Role>(null);
  const [formPermissions, setFormPermissions] = useState<string[]>([]);
  useEffect(() => {
    const getRole = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/roles/${id}`
      );
      const data = await response.json();
      setFormPermissions(
        data.permissions.map((item: { name: string }) => item.name)
      );
      setRole(data);
    };
    getRole();
  }, [id]);
  const handleChangePermission = (checked: boolean, fieldValue: string) => {
    if (checked) {
      const permissonsClone = [...formPermissions];
      if (!permissonsClone.includes(fieldValue)) {
        permissonsClone.push(fieldValue);
      }
      setFormPermissions(permissonsClone);
    } else {
      setFormPermissions(
        formPermissions.filter((permission) => fieldValue !== permission)
      );
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const response = fetch(
      `${import.meta.env.VITE_SERVER_API}/roles/${id}/permissions`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPermissions),
      }
    );
    toast.promise(response, {
      loading: "Đang cập nhật...",
      success: "Cập nhật thành công",
      error: "Đã có lỗi xảy ra",
    });
  };
  if (!role) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Edit Role</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <div className="w-1/2">
            <label>Name</label>
            <Input placeholder="Name..." value={role.name} />
          </div>
          <div className="w-1/2">
            <label>Status</label>
            <label className="flex items-center h-1/2 pt-2">
              <Checkbox className="mr-2" checked={Boolean(role.status)} />
              Active
            </label>
          </div>
        </div>
        <h4 className="text-xl my-3">Phân quyền</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">Chức năng</TableHead>
              <TableHead>Quyền hạn</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {modules.map((module, index) => (
              <TableRow key={index}>
                <TableCell>{module.title}</TableCell>
                <TableCell className="flex flex-wrap justify-between">
                  {module.actions.map((action, index) => (
                    <div className="w-1/4 mb-3" key={index}>
                      <label>
                        <Checkbox
                          onCheckedChange={(checked: boolean) =>
                            handleChangePermission(
                              checked,
                              `${module.name}.${action}`
                            )
                          }
                          value={`${module.name}.${action}`}
                          checked={hasPermission(
                            formPermissions,
                            `${module.name}.${action}`
                          )}
                        />{" "}
                        {`${action.charAt(0).toUpperCase()}${action.slice(1)}`}
                      </label>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button>Lưu thay đổi</Button>
      </form>
    </div>
  );
}
