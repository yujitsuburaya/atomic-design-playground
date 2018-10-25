// @flow
import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// Example
import CenterView from "./CenterView";
import Welcome from "./Welcome";

import AcceptButton from "./Molecules/AcceptButton";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);

storiesOf("Molecules", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("AcceptButton", () => (
    <AcceptButton onPress={() => alert("AcceptButton")}>
      <Text>😀</Text>
    </AcceptButton>
  ));
