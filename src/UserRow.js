import React from "react";
import { Link } from "react-router-dom";
export default function UserRow(props) {
  const userlisting = props.userdata;
  // var vaol = "NO DATA FOUND";

  return userlisting
    .filter((de) => {
      if (props.searchterm == "") {
        return de;
      } else if (
        de.name.toLowerCase().includes(props.searchterm.toLowerCase())
      ) {
        return de;
      }
    })
    .map((de) => (
      <tr key={de._id}>
        <td>
          <input
            type="checkbox"
            checked={de.select}
            onChange={(e) => {
              let value = e.target.checked;
              props.Setuserdata(
                props.userdata.map((sd) => {
                  if (sd.id === de.id) {
                    sd.select = value;
                  }
                  return sd;
                })
              );
            }}
          />
        </td>
        <td>{de.name}</td>
        <td>{de.role}</td>
        <td>{de.userId}</td>
        <td>{de.password != "" ? "****" : "NA"}</td>
        <td>
          <Link
            to={`/userdetails/${de._id}`}
            className="admin_panel_viewmore_list"
          >
            View More
          </Link>
        </td>
      </tr>
    ));
}
