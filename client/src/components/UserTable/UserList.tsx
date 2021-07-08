import * as React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { BarChartOutlined, UserOutlined } from "@ant-design/icons";
import EditableTable from "./EditableTable";

export default function UserList(props: any) {
  // const [plays, setPlays] = React.useState<any>();

  React.useEffect(() => {

  }, []);

  return (
    <div id="home-table" style={{ padding: 24 }}>
      <h2 className="title">Editable Table</h2>
      <EditableTable></EditableTable>
      <Link to="plays/createPlay">
        <Button className="common-setting-btn" id="create-btn" type="default">
          Create
        </Button>
      </Link>
    </div>
  );
}