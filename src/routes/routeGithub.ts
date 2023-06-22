import axios from "axios";
import { Router } from "express";
import { Request, Response } from "express"

const routeGithub = Router()

routeGithub.get('/:username', async (req: Request, res: Response) => {
    const { username } = req.params;
    try {
        const user = await axios.get(`https://api.github.com/users/${username}`)

        res.status(200).json(user.data.public_repos)
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

export default routeGithub