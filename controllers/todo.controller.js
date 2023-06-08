import pool from "../db/conn.js";
import { todoModel } from "../models/todo.model.js";

const getAll = async(req, res) => {
    const {limit = 5, sort, page = 1} = req.query;

    const result = await todoModel.findAll({limit, sort, page});

    const results = result.map((res) => {
        return{
            name: res.nombre,
            href: `http://localhost:3000/api/joyas/${res.id}`
        }
    });

    const text = "SELECT * FROM inventario";
    const { rows: data } = await pool.query(text);
    const total_pages = Math.ceil(data.length / limit);

    const stock = "SELECT SUM(stock) FROM inventario";
    const { rows: s } = await pool.query(stock);

    return res.status(200).json({
        meta: {
        totalJoyas: data.length,
        StockTotal: s[0]['sum'],
        limit: parseInt(limit),
        page: parseInt(page),
        total_pages: total_pages,
        next:
        total_pages <= page
        ? null
        : `http://localhost:3000/api/joyas?limit=${limit}&page=${
            parseInt(page) + 1
        }`,
        previous:
        page <= 1
        ? null
        : `http://localhost:3000/api/joyas?limit=${limit}&page=${
            parseInt(page) - 1
        }`,
        },results});
}

const getAllFilers = async(req, res) => {
    const {filters} = req.query;

    try {
        const result = await todoModel.findAllFilters({filters});
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
}

export const todoController = {
    getAll,
    getAllFilers,
}