// import {Button, TextField} from "@mui/material";
// import Box from "@mui/material/Box";
// import {Field, Form, Formik} from "formik";
// import * as React from "react";
// import * as Yup from 'yup'
// import { login } from "../../api/UserApi";
// import {useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";
// import {userLoggedIn} from "../../store/UserSlice";
// import {useState} from "react";
//
// const loginValidationSchema = Yup.object().shape({
//     email: Yup.string()
//         .email()
//         .required(),
//     password: Yup.string()
//         .required()
// })
//
// const Login = () => {
//
//     const dispatch = useDispatch();
//     const navigate = useNavigate()
//
//
//     return (
//         <>
//             <Box
//                 noValidate
//                 autoComplete="off"
//                 sx={{
//                     width: 300
//                 }}
//             >
//                 <Formik
//                     initialValues={{
//                         email: '',
//                         password: ''
//                     }}
//                     onSubmit={async (values, { setSubmitting }) => {
//                         console.log("login data", values)
//
//                         const user = await login(values)
//                         console.log("user", user)
//                         dispatch(userLoggedIn(user))
//
//                         setSubmitting(false)
//
//                         navigate("/")
//                     }}
//                     validationSchema={loginValidationSchema}>
//                     {({errors, touched}) => (
//                         <Form>
//                             <Field id="email"
//                                    name="email"
//                                    label="Email"
//                                    variant="standard"
//                                    fullWidth
//                                    error={!!errors.email && touched.email}
//                                    helperText={touched.email && errors.email}
//                                    as={TextField}
//                             />
//                             <Field id="password"
//                                    name="password"
//                                    label="Password"
//                                    type="password"
//                                    variant="standard"
//                                    fullWidth
//                                    error={!!errors.password && touched.password}
//                                    helperText={touched.password && errors.password}
//                                    as={TextField}
//                             />
//                             <Button type="submit" sx={{
//                                 marginTop: 2
//                             }} variant="contained">Login</Button>
//                         </Form>
//                     )}
//                 </Formik>
//             </Box>
//         </>
//     )
// }
//
//
// export default Login