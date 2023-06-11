import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Expirys from "../../../components/Expirys";
import ArrowLeft from "@iconscout/react-unicons/icons/uil-arrow-left";

const Individual = () => {
  const { person } = useParams();

  return (
    <Wrapper className="min-h-screen container mx-auto">
      <div className="pt-4">
        <Link to="/" className="inl inline-block">
          <ArrowLeft size="30" color="#fff" />
        </Link>
        <h1 className="text-white text-3xl text-center pb-4">{person}</h1>
      </div>
      <div id="individual-grid" className="grid gap-3">
        <div className="main-card">
          <h2 className="text-center text-xl">Today</h2>
          <div className="mini-card">
            <h3 className="background-two p-1">Main Status Expirys</h3>
            <div className="mini-card-body">
              <Expirys type="ketamine" date="11/06/2023" />
            </div>
          </div>

          <div className="mini-card mt-3">
            <h3 className="background-two p-1">Sub Status Expirys</h3>
            <div className="mini-card-body">
              <Expirys type="ketamine" date="11/06/2023" />
            </div>
          </div>
        </div>
        <div className="main-card">
          <h2 className="text-center text-xl">Tomorrow</h2>

          <div className="mini-card">
            <h3 className="background-two p-1">Main Status Expirys</h3>
            <div className="mini-card-body">
              <Expirys type="ketamine" date="11/06/2023" />
            </div>
          </div>

          <div className="mini-card mt-3">
            <h3 className="background-two p-1">Sub Status Expirys</h3>
            <div className="mini-card-body">
              <Expirys type="ketamine" date="11/06/2023" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Individual;

const Wrapper = styled.div`
  #individual-grid {
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
  }

  .main-card {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: white;
    position: relative;
  }

  .mini-card {
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .mini-card-body {
    border: 2px solid #d3f531;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: none;
    padding: 0 0.5rem;
  }
`;
