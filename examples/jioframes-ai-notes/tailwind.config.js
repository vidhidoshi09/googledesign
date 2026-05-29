// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#131318",
        "surface-dim": "#0F0F14",
        "surface-bright": "#37373D",
        "surface-container-lowest": "#0D0D12",
        "surface-container-low": "#1B1B21",
        "surface-container": "#1F1F26",
        "surface-container-high": "#2A2A30",
        "surface-container-highest": "#34343B",
        "on-surface": "#E4E1E9",
        "on-surface-variant": "#C5C2CE",
        "inverse-surface": "#2F2F36",
        "inverse-on-surface": "#F2EFF8",
        "outline": "#908D9A",
        "outline-variant": "#46434F",
        "surface-tint": "#ADC6FF",
        "primary": "#ADC6FF",
        "on-primary": "#003062",
        "primary-container": "#004691",
        "on-primary-container": "#D8E2FF",
        "inverse-primary": "#0059C4",
        "secondary": "#BEC6DC",
        "on-secondary": "#283141",
        "secondary-container": "#3E4759",
        "on-secondary-container": "#DAE2F9",
        "tertiary": "#FFBA8F",
        "on-tertiary": "#4C2700",
        "tertiary-container": "#6B3A00",
        "on-tertiary-container": "#FFD9BE",
        "error": "#FFB4AB",
        "on-error": "#690005",
        "error-container": "#93000A",
        "on-error-container": "#FFDAD6",
        "primary-fixed": "#D8E2FF",
        "primary-fixed-dim": "#ADC6FF",
        "on-primary-fixed": "#001945",
        "on-primary-fixed-variant": "#004691",
        "secondary-fixed": "#DAE2F9",
        "secondary-fixed-dim": "#BEC6DC",
        "on-secondary-fixed": "#121B2B",
        "on-secondary-fixed-variant": "#3E4759",
        "tertiary-fixed": "#FFD9BE",
        "tertiary-fixed-dim": "#FFBA8F",
        "on-tertiary-fixed": "#2B1300",
        "on-tertiary-fixed-variant": "#6B3A00",
        "background": "#131318",
        "on-background": "#E4E1E9",
        "surface-variant": "#46434F",
        "record": "#B71C1C",
        "on-record": "#FFFFFF",
      },
      fontFamily: {
        "display": ["Google Sans", "Roboto", "sans-serif"],
        "headline-lg": ["Google Sans", "Roboto", "sans-serif"],
        "headline-md": ["Google Sans", "Roboto", "sans-serif"],
        "headline-sm": ["Google Sans", "Roboto", "sans-serif"],
        "title-lg": ["Google Sans", "Roboto", "sans-serif"],
        "title-md": ["Roboto", "sans-serif"],
        "title-sm": ["Roboto", "sans-serif"],
        "body-lg": ["Roboto", "Noto Sans Devanagari", "sans-serif"],
        "body-md": ["Roboto", "Noto Sans Devanagari", "sans-serif"],
        "body-sm": ["Roboto", "Noto Sans Devanagari", "sans-serif"],
        "label-lg": ["Roboto", "sans-serif"],
        "label-md": ["Roboto", "sans-serif"],
        "label-sm": ["Roboto", "sans-serif"],
      },
      fontSize: {
        "display": [
          "57px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.25px",
            fontWeight: "400",
          },
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "headline-md": [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "headline-sm": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "title-lg": [
          "22px",
          {
            lineHeight: "28px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "title-md": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.15px",
            fontWeight: "500",
          },
        ],
        "title-sm": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.1px",
            fontWeight: "500",
          },
        ],
        "body-lg": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.5px",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.25px",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        "label-lg": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.1px",
            fontWeight: "500",
          },
        ],
        "label-md": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "500",
          },
        ],
        "label-sm": [
          "11px",
          {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "500",
          },
        ],
      },
      borderRadius: {
        "none": "0px",
        "xs": "4px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "28px",
        "full": "9999px",
      },
      spacing: {
        "base": "8px",
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "48px",
        "gutter": "16px",
        "margin": "16px",
      },
    },
  },
};
