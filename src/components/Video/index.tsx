import { any } from "prop-types";
import React from "react";
import { connect } from "react-redux";

const Video = ({activeModule, activeLesson}: any) => {
  
  return (
    <div>
      <strong>Módulo {activeModule.activeModule}</strong>
      <span>Aula {activeLesson.activeLesson}</span>
    </div>
  );
};

export default connect(state => ({
  activeModule: state,
  activeLesson: state,
}) )(Video);
