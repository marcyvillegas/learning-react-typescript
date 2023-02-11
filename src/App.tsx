import ButtonModal from "./components/contextApi/ButtonModal";
import ModalContainer from "./components/contextApi/ModalContainer";
import Form from "./components/FormsAndEvents/Form";
import Header from "./components/props/Header";
import User from "./components/useState/User";
import ModalContextProvider from "./context/ModalContextProvider";
import ShippingUnionStyle from "./components/enumUnion/ShippingUnionStyle";
import ShippingEnumStyle from "./components/enumUnion/ShippingEnumStyle";
import ContainerDataGrid from "./components/genericComponent/ContainerDataGrid";
import MainNarrowingComponent from "./components/typeNarrowing/MainNarrowingComponent";

function App() {
  return (
    <ModalContextProvider>
      <div style={{ padding: "1rem 5rem" }}>

        {/* Resource: https://www.youtube.com/watch?v=V9A-zHJvXtk&list=PLG-Mk4wQm9_LyKE5EwoZz2_GGXR-zJ5Ml&index=2 */}

        {/* 1. Props */}
        <Header
          text="This is a header"
          // extraText='optional props'
        />
        <hr />

        {/* 2. useState */}
        <User />
        <hr />

        {/* 3. Forms and Events */}
        <Form />
        <hr />

        {/* 4. Context API */}
        <ButtonModal />
        <ModalContainer />
        <hr />

        {/* 5. Enums and Union Type */}
        {/* - avoid enums */}
        <ShippingUnionStyle />
        <ShippingEnumStyle />
        <hr />

        {/* 6. Generic Component */}
        <ContainerDataGrid />
        <hr />

        {/* 7. Type Narrowing */}
        <MainNarrowingComponent />

      </div>
    </ModalContextProvider>
  );
}

export default App;
