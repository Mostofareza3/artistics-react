import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import styled from 'styled-components';

const ThemeSwitcherStyles = styled.div`
  label {
    --gap: 5px;
    --size: 20px;
    height: 30px;
    width: 55px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    background-color: #cfc8f4;
    border-radius: 50px;
    z-index: 1;
    .icon {
      height: var(--size);
      width: (--size);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 75%;
      color: var(--white);
    }
  }
  input {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
  label::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: var(--gap);
    height: var(--size);
    width: var(--size);
    background-color: var(--mediumSlateBlue);
    transition: 0.5s ease left;
    z-index: -1;
  }
  input:checked + label::after {
    left: calc(100% - var(--size) - var(--gap));
  }
`;

const ThemeSwitcher = () => (
  <ThemeSwitcherStyles>
    <input type="checkbox" id="switcher" />
    <label htmlFor="switcher">
      <div className="icon">
        <FiSun />
      </div>
      <div className="icon">
        <FiMoon />
      </div>
    </label>
  </ThemeSwitcherStyles>
);

export default ThemeSwitcher;
