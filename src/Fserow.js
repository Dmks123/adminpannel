import React from "react";
import { Link } from "react-router-dom";
export default function Fserow(props) {
  const val = props.fsedata;
  // var vaol = "NO DATA FOUND";
  return val
    .filter((d) => {
      if (props.searchterm == "") {
        return d;
      } else if (
        d.name.toLowerCase().includes(props.searchterm.toLowerCase())
      ) {
        return d;
      }
    })
    .map((d) => (
      <tr key={d.id}>
        <td>
          <input
            type="checkbox"
            checked={d.select}
            onChange={(e) => {
              let value = e.target.checked;
              props.Setfsedata(
                props.fsedata.map((sd) => {
                  if (sd.id === d.id) {
                    sd.select = value;
                  }
                  return sd;
                })
              );
            }}
          />
        </td>
        <td>{d.name}</td>
        <td>{d.mobile}</td>
        <td>{d.empid}</td>
        <td>{d.doj}</td>
        <td>
          <Link
            to={`/fsedetails/${d.id}`}
            className="admin_panel_viewmore_list"
          >
            View More
          </Link>
        </td>
      </tr>
    ));
}
