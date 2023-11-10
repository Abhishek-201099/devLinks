import { Outlet } from "react-router-dom";
import StyledAppLayout from "./StyledAppLayout";
import Header from "./Header";
import StyledMain from "./StyledMain";
import StyledShowCase from "./StyledShowCase";
import StyledEditForm from "./StyledEditForm";
import ShowCase from "../pages/ShowCase";

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <StyledShowCase>
          <ShowCase />
        </StyledShowCase>
        <StyledEditForm>
          <Outlet />
        </StyledEditForm>
      </StyledMain>
    </StyledAppLayout>
  );
}
