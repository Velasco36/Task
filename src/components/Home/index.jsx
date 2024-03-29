
import { Headers } from "./Headers/Headers";
import { ButtonTask } from "./New Task/ButtonTask";
import "./style.css";
import ListCard from "./Cards/ListCard";

export function Task() {

  return (
    <div id="bg">
      <Headers />
      <ButtonTask />
      <div className="top">
      <h1 className="list" >
        List
      </h1>
      <ListCard />
      </div>

    </div>
  );
}
