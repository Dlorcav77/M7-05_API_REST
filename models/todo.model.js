import format from "pg-format";
import {pool} from "../db/conn.js"

const findAll = async({limit, sort, page}) => {
    let query = "SELECT * FROM inventario";
    const arrayValues = [];

    if(sort){
        query += " ORDER BY %s %s";
        const property = Object.keys(sort)[0];
        arrayValues.push(property, sort[property]);
    }
    
    if(page){
        query += " OFFSET %s";
        arrayValues.push((page - 1) * limit);
    }

    if(limit){
        query += " LIMIT %s";
        arrayValues.push(limit);
    }

    const formattedQuery = format(query, ...arrayValues);
    const { rows } = await pool.query(formattedQuery);
    return rows;
};

const findAllFilters = async({filters}) => {
    let query = "SELECT * FROM inventario";
    const arrayValues = [];

    if(filters){
        query += " WHERE";
        const propertys = Object.keys(filters);

        const operatorsQueryObjet = {
            $eq: "=",
            $gt: ">",
            $gte:">=",
            $lt: "<",
            $lte:"<=",
            $ne: "!="
        }
        for (const key in filters) {
            const name = key;
            const object = filters[name];
            const operator = Object.keys(object)[0];
            const value = object[operator];

            query += " %s %s '%s'";

            arrayValues.push(name, operatorsQueryObjet[operator], value);

            if (key !== propertys[propertys.length - 1]) {
                query += " AND ";
            }
        }
    }

    const formattedQuery = format(query, ...arrayValues);
    const { rows } = await pool.query(formattedQuery);
    return rows;
};

export const todoModel = {
    findAll,
    findAllFilters,
}