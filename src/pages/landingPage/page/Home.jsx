import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Expirys from "../../../components/Expirys";

const Home = () => {
  return (
    <Wrapper className="min-h-screen container mx-auto">
      <h1 className="text-white text-3xl text-center py-4">
        Just Budget Creditors Expiry Board
      </h1>
      <div className="gap-3" id="main-dashboard">
        <div id="alex" className="main-card">
          <h2 className="text-center text-2xl">Alex</h2>
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

          <Link to="/individual/Alex" className="link" />
        </div>

        <div id="shannon" className="main-card">
          <h2 className="text-center text-2xl">Shannon </h2>

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

          <Link to="/individual/Shannon" className="link" />
        </div>

        <div id="team" className="main-card">
          <h2 className="text-center text-2xl">Team </h2>
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
          <Link to="/individual/Team" className="link" />
        </div>

        <div id="tom" className="main-card">
          <h2 className="text-center text-2xl">Tom </h2>
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
          <Link to="/individual/Tom" className="link" />
        </div>

        <div id="kabir" className="main-card">
          <h2 className="text-center text-2xl">Kabir</h2>
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
          <Link to="/individual/Kabir" className="link" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  #main-dashboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  #alex {
    grid-area: 1/1/2/2;
  }

  #shannon {
    grid-area: 1/3/2/4;
  }

  #tom {
    grid-area: 2/1/3/2;
  }

  #kabir {
    grid-area: 2/3/3/4;
  }

  #team {
    grid-area: 1/2/3/3;
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

  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0.5rem;
  }
`;
