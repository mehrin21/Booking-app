import { Suspense, useState } from "react";

import "./App.css";
import WedSite from "./pages/WedSite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<WedSite />} />
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":proprtyId" element={<Property />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initailIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
