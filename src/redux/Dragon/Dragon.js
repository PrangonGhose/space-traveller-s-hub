import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_DATA = "GET_DATA";
const dragonUrl = "https://api.spacexdata.com/v4/dragons";

const getDragonApi = createAsyncThunk(GET_DATA,
    () => axios.get(dragonUrl).then((resp) => {
        const dragonData = (resp.data).map((dragon) => (
            {
                id: dragon.id,
                name: dragon.name,
                type: dragon.type,
                description: dragon.description,
                flickrImage: dragon.flickr_image,
                reserved: false,
            }
        ));
        return dragonData;
    })
    );
