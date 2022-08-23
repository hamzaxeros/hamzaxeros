import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Checkbox, } from "@material-ui/core";

export default function ControlledRadioButtonsGroup() {
 

  const params = ["hello_1", "hello_2", "hello_3"]
  const [visualTypes, setVisualTypes] = useState({
    graph:{
      checked: false,
      x:[],
      y:[]
    }
  })

  return (
    <div className="w-100 position-absolute drop-visual-selctor ">
    <FormControl
      component="fieldset"
      className="w-100 float-left"
    >
      <RadioGroup>
        <FormControlLabel
          value={"graph"}
          onChange={(e,value)=>console.log(e.target, value)}
          control={<Radio/>}
          label="Graph"
          className="main-cate-selector w-100 float-left"
        />
          <div className="w-100 float-left inside-wrap-v-opt pl-4">
            <RadioGroup>
              <div className="w-100 float-left inside-cate-01">
                <FormControlLabel
                  value={"line"}
                  control={<Radio/>}
                  label="Line"
                />
                  <div className="w-100 float-left inside-cate-02 ">
                    <div className="w-100 float-left inside-cate-03 pl-4">
                      <FormControlLabel
                        value={"primary_y"}
                        control={<Checkbox color="primary"/>}
                        label="Primary"
                        labelPlacement="end"
                        className="w-100 float-left"
                      />
                        <div className="w-100 float-left inside-cate-04 pl-4">
                              <FormControlLabel
                                control={
                                  <Checkbox color="primary"  />
                                }
                                label={"PRI 1"}
                                labelPlacement="end"
                                className="w-100 float-left"
                              />

                        </div>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Secondary "
                        labelPlacement="end"
                        className="w-100 float-left"
                      />
                        <div className="w-100 float-left inside-cate-04 pl-4">
                              <FormControlLabel
                                control={ 
                                  <Checkbox color="primary" />
                                }
                                label={"SEC 1"}
                                labelPlacement="end"
                                className="w-100 float-left"
                              />
                        </div>
                    </div>
                  </div>
              </div>
          </RadioGroup>
          </div>
      </RadioGroup>
    </FormControl>
  </div>
  );
}
