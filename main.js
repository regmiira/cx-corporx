//fill in full stars
    @for $i from 1 through 5 {
        &[data-bh-rating^="#{$i}"] {
            .bh-star--1 {
                .full {
                    fill: gold;
                }
            }
        }
    }

    @for $i from 2 through 5 {
        &[data-bh-rating^="#{$i}"] {
            .bh-star--2 {
                .full {
                    fill: gold;
                }
            }
        }
    }

    @for $i from 3 through 5 {
        &[data-bh-rating^="#{$i}"] {
            .bh-star--3 {
                .full {
                    fill: gold;
                }
            }
        }
    }

    @for $i from 4 through 5 {
        &[data-bh-rating^="#{$i}"] {
            .bh-star--4 {
                .full {
                    fill: gold;
                }
            }
        }
    }

    &[data-bh-rating^="5"] {
        .bh-star--5 {
            .full {
                fill: gold;
            }
        }
    }

    //fill in half stars
    @for $i from 5 through 9 {
        &[data-bh-rating^="0.#{$i}"] {
            .bh-star--1 {
                .left-half {
                    fill: gold;
                }
            }
        }

        &[data-bh-rating^="1.#{$i}"] {
            .bh-star--2 {
                .left-half {
                    fill: gold;
                }
            }
        }

        &[data-bh-rating^="2.#{$i}"] {
            .bh-star--3 {
                .left-half {
                    fill: gold;
                }
            }
        }

        &[data-bh-rating^="3.#{$i}"] {
            .bh-star--4 {
                .left-half {
                    fill: gold;
                }
            }
        }

        &[data-bh-rating^="4.#{$i}"] {
            .bh-star--5 {
                .left-half {
                    fill: gold;
                }
            }
        }
    }

    &.rounding-up {

        //fill in full stars
        @for $i from 1 through 5 {
            &[data-bh-rating^="#{$i}"] {
                .bh-star--1 {
                    .full {
                        fill: gold;
                    }
                }
            }
        }

        @for $i from 2 through 5 {
            &[data-bh-rating^="#{$i}"] {
                .bh-star--2 {
                    .full {
                        fill: gold;
                    }
                }
            }
        }

        @for $i from 3 through 5 {
            &[data-bh-rating^="#{$i}"] {
                .bh-star--3 {
                    .full {
                        fill: gold;
                    }
                }
            }
        }

        @for $i from 4 through 5 {
            &[data-bh-rating^="#{$i}"] {
                .bh-star--4 {
                    .full {
                        fill: gold;
                    }
                }
            }
        }

        &[data-bh-rating^="5"] {
            .bh-star--5 {
                .full {
                    fill: gold;
                }
            }
        }

        @for $i from 6 through 9 {
            &[data-bh-rating^="0.#{$i}"] {
                .bh-star--1 {
                    .full {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="1.#{$i}"] {
                .bh-star--2 {
                    .full {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="2.#{$i}"] {
                .bh-star--3 {
                    .full {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="3.#{$i}"] {
                .bh-star--4 {
                    .full {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="4.#{$i}"] {
                .bh-star--5 {
                    .full {
                        fill: gold;
                    }
                }
            }
        }

        //fill in half stars
        @for $i from 0 through 5 {
            &[data-bh-rating^="0.#{$i}"] {
                .bh-star--1 {
                    .left-half {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="1.#{$i}"] {
                .bh-star--2 {
                    .left-half {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="2.#{$i}"] {
                .bh-star--3 {
                    .left-half {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="3.#{$i}"] {
                .bh-star--4 {
                    .left-half {
                        fill: gold;
                    }
                }
            }

            &[data-bh-rating^="4.#{$i}"] {
                .bh-star--5 {
                    .left-half {
                        fill: gold;
                    }
                }
            }
        }
    }
}