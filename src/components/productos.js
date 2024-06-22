const productos = [
    {id: 1, nombre: 'Acelgas', descripcion: 'Acelgas x manojo', precio: 15.9, unidad: '1pz', imagen: 'acel.png', departamento: 'Frutas y Verduras' },
{id: 2, nombre: 'Aguacate en malla', descripcion: 'Aguacate en malla', precio: 39.9, unidad: '1pz', imagen: 'aguacate_mall.png', departamento: 'Frutas y Verduras' },
{id: 3, nombre: 'Ajo extra ', descripcion: 'Ajo extra x kg', precio: 189.9, unidad: '1pz', imagen: 'ajo.png', departamento: 'Frutas y Verduras' },
{id: 4, nombre: 'Apio ', descripcion: 'Apio x kg', precio: 29.9, unidad: '1pz', imagen: 'apio.png', departamento: 'Frutas y Verduras' },
{id: 5, nombre: 'Brocoli ', descripcion: 'Brocoli x kg', precio: 69.9, unidad: 'kg', imagen: 'brocoli.png', departamento: 'Frutas y Verduras' },
{id: 6, nombre: 'Calabacita', descripcion: 'Calabacita', precio: 18.9, unidad: 'kg', imagen: 'calabacita.png', departamento: 'Frutas y Verduras' },
{id: 7, nombre: 'Cebolla en malla', descripcion: 'Cebolla en malla', precio: 14.9, unidad: 'kg', imagen: 'cebo_ma.png', departamento: 'Frutas y Verduras' },
{id: 8, nombre: 'Cebolla Morada', descripcion: 'Cebolla Morada', precio: 49.9, unidad: '1kg', imagen: 'cebo_mor.png', departamento: 'Frutas y Verduras' },
{id: 9, nombre: 'Champiñon Monte Blanco', descripcion: 'Champiñon Blanco Monte Blanco 450 gr', precio: 64.9, unidad: '1pz', imagen: 'champinon_bco.png', departamento: 'Frutas y Verduras' },
{id: 10, nombre: 'Chile poblano ', descripcion: 'Chile poblano x kg', precio: 56.9, unidad: '1pz', imagen: 'chile_pobl.png', departamento: 'Frutas y Verduras' },
{id: 11, nombre: 'Cilantro', descripcion: 'Cilantro x manojo', precio: 16.9, unidad: '1pz', imagen: 'cilantro.png', departamento: 'Frutas y Verduras' },
{id: 12, nombre: 'Epazote', descripcion: 'Epazote de 40 grs', precio: 14.9, unidad: '1pz', imagen: 'epazote.png', departamento: 'Frutas y Verduras' },
{id: 13, nombre: 'Espinacas', descripcion: 'Espinacas x manojo', precio: 19.9, unidad: '1pz', imagen: 'espinacas.png', departamento: 'Frutas y Verduras' },
{id: 14, nombre: 'Frambuesa ', descripcion: 'Frambuesa 170 grs', precio: 39.9, unidad: '1pz', imagen: 'framb.png', departamento: 'Frutas y Verduras' },
{id: 15, nombre: 'Germinado de Alfalfa', descripcion: 'Germinado de Alfalfa 100 gr', precio: 36.9, unidad: '1pz', imagen: 'germinado_alfa.png', departamento: 'Frutas y Verduras' },
{id: 16, nombre: 'Hierbabuena', descripcion: 'Hierbabuena 40 grs', precio: 14.9, unidad: '1pz', imagen: 'hierbabuena.png', departamento: 'Frutas y Verduras' },
{id: 17, nombre: 'Kiwi ', descripcion: 'kiwi x kg 1pza = 95gr', precio: 99.9, unidad: '1pz', imagen: 'kiwi.png', departamento: 'Frutas y Verduras' },
{id: 18, nombre: 'Lechuga bola', descripcion: 'Lechuga Bola x pieza', precio: 29.9, unidad: '1pz', imagen: 'lechuga_bola.png', departamento: 'Frutas y Verduras' },
{id: 19, nombre: 'Limon agrio', descripcion: 'Limon agrio x kg', precio: 28.9, unidad: 'kg', imagen: 'limon_ag.png', departamento: 'Frutas y Verduras' },
{id: 20, nombre: 'Mango ATAULFO', descripcion: 'Mango ATAULFO x kg', precio: 49.9, unidad: 'kg', imagen: 'mang_atau.png', departamento: 'Frutas y Verduras' },
{id: 22, nombre: 'Manzana Golden Delicious', descripcion: 'Manzana Golden Delicious x kg', precio: 49.9, unidad: '1pz', imagen: 'mza_gold.png', departamento: 'Frutas y Verduras' },
{id: 23, nombre: 'Naranja Valencia', descripcion: 'Naranja Valencia x kg', precio: 34.9, unidad: '1pz', imagen: 'naranja_val.png', departamento: 'Frutas y Verduras' },
{id: 24, nombre: 'Nopal en penca limpio ', descripcion: 'Nopal en penca limpio x kg', precio: 39.9, unidad: '1pz', imagen: 'nopal_lim.png', departamento: 'Frutas y Verduras' },
{id: 25, nombre: 'Papaya Maradol ', descripcion: 'Papaya Maradol x kg', precio: 39.9, unidad: '1pz', imagen: 'papay_mara.png', departamento: 'Frutas y Verduras' },
{id: 26, nombre: 'Pepino ', descripcion: 'Pepino  x kg', precio: 26.9, unidad: '1pz', imagen: 'pepino.png', departamento: 'Frutas y Verduras' },
{id: 27, nombre: 'Pera Bosc', descripcion: 'Pera Bosc x kg', precio: 69.9, unidad: '1pz', imagen: 'pera_bosc.png', departamento: 'Frutas y Verduras' },
{id: 28, nombre: 'Pimiento Morron Rojo', descripcion: 'Pimiento Morron Rojo', precio: 89.9, unidad: '1pz', imagen: 'pime_roj.png', departamento: 'Frutas y Verduras' },
{id: 29, nombre: 'Pimiento Morron Verde', descripcion: 'Pimiento Morron Verde', precio: 79.9, unidad: '1pz', imagen: 'pime_ver.png', departamento: 'Frutas y Verduras' },
{id: 30, nombre: 'Platano Chiapas', descripcion: 'Platano Chiapas', precio: 24.9, unidad: 'kg', imagen: 'plat.png', departamento: 'Frutas y Verduras' },
{id: 31, nombre: 'Sandia', descripcion: 'Sandia x kg', precio: 11.9, unidad: '1pz', imagen: 'sandia.png', departamento: 'Frutas y Verduras' },
{id: 32, nombre: 'Tomate Bola', descripcion: 'Tomate Bola x kg', precio: 39.9, unidad: '1pz', imagen: 'tomat_bol.png', departamento: 'Frutas y Verduras' },
{id: 33, nombre: 'Tomate Saladet ', descripcion: 'Tomate Saladet x kg', precio: 29.9, unidad: '1kg', imagen: 'tomat_sal.png', departamento: 'Frutas y Verduras' },
{id: 34, nombre: 'Zanahoria ', descripcion: 'Zanahoria  x kg', precio: 16.9, unidad: '1pz', imagen: 'zanah.png', departamento: 'Frutas y Verduras' },
{id: 35, nombre: 'Coliflor', descripcion: 'Coliflor x pza', precio: 49.9, unidad: 'pz', imagen: 'coliflor.png', departamento: 'Frutas y Verduras' },
{id: 36, nombre: 'Chile  Jalapeño', descripcion: 'Chile  Jalapeño x kg', precio: 29.9, unidad: 'kg', imagen: 'chile_jala.png', departamento: 'Frutas y Verduras' },
{id: 37, nombre: 'Chile Serrano', descripcion: 'Chile Serrano x kg', precio: 59.9, unidad: 'kg', imagen: 'chile_serr.png', departamento: 'Frutas y Verduras' },
{id: 38, nombre: 'Lechuga Orejona', descripcion: 'Lechuga Orejona x pza', precio: 27.9, unidad: 'pz', imagen: 'lechuga_orej.png', departamento: 'Frutas y Verduras' },
{id: 39, nombre: 'Pera Anjou', descripcion: 'Pera Anjou x kg', precio: 79.9, unidad: 'kg', imagen: 'pera_anjo.png', departamento: 'Frutas y Verduras' },
{id: 40, nombre: 'Piña Miel', descripcion: 'Piña Miel x kg', precio: 22.9, unidad: 'kg', imagen: 'pina_miel.png', departamento: 'Frutas y Verduras' },
{id: 41, nombre: 'Jicama', descripcion: 'Jicama x kg', precio: 39.9, unidad: 'pz', imagen: 'jicama.png', departamento: 'Frutas y Verduras' },
{id: 42, nombre: 'Frijol a granel', descripcion: 'Frijol a granel x kg', precio: 39.9, unidad: 'kg', imagen: 'frijol_agranel.png', departamento: 'Frutas y Verduras' },
{id: 43, nombre: 'Lenteja', descripcion: 'Lenteja', precio: 29.9, unidad: 'pz', imagen: 'lenteja.png', departamento: 'Frutas y Verduras' },
{id: 44, nombre: 'Sardina DOLORES', descripcion: 'Sardina en aceite DOLORES 120 grs', precio: 29.9, unidad: 'pz', imagen: 'sardi_dol.png', departamento: 'Frutas y Verduras' },
{id: 45, nombre: 'Garbanzo', descripcion: 'Garbanzo VERDE VALLE 500 grs', precio: 45.9, unidad: 'pz', imagen: 'garbanzo.png', departamento: 'Frutas y Verduras' },
{id: 46, nombre: 'Huevo blanco San Juan 18 pzas', descripcion: 'Huevo blanco San Juan 18 pzas', precio: 57.9, unidad: '1pz', imagen: 'huevo_sj.png', departamento: 'Huevos' },
{id: 47, nombre: 'Huevo blanco San Juan ', descripcion: 'Huevo blanco San Juan 12 piezas', precio: 38.9, unidad: 'pz', imagen: 'huevo_sj12.png', departamento: 'Huevos' },
{id: 48, nombre: 'Danonino Napolitano', descripcion: 'Danonino Napolitano 252 grs', precio: 41.9, unidad: '1pz', imagen: 'danonino_6.png', departamento: 'Lacteos' },
{id: 49, nombre: 'Leche entera LALA ', descripcion: 'Leche entera uht LALA 6 lts', precio: 149.9, unidad: '6lts', imagen: 'leche_6lt.png', departamento: 'Lacteos' },
{id: 50, nombre: 'Mantequilla s/sal La Gloria', descripcion: 'Mantequilla s/sal La Gloria 90 GRS', precio: 29.9, unidad: '1pz', imagen: 'marga_gloria.png', departamento: 'Lacteos' },
{id: 51, nombre: 'Mantequilla s/sal La Gloria barras', descripcion: 'Mantequilla s/sal La Gloria 4 barras', precio: 105.9, unidad: '1pz', imagen: 'marga_gloria2.png', departamento: 'Lacteos' },
{id: 52, nombre: 'Margarina CHILCHOTA', descripcion: 'Margarina c/sal CHILCHOTA 400 grs', precio: 31.9, unidad: 'pz', imagen: 'marga_chil.png', departamento: 'Lacteos' },
{id: 53, nombre: 'Cheez Whiz KRAFT ', descripcion: 'Cheez Whiz KRAFT 235 grs', precio: 59.9, unidad: '1pz', imagen: 'cheez_whiz.png', departamento: 'Quesos' },
{id: 54, nombre: 'Queso Manchego Rallado LALA ', descripcion: 'Queso Manchego Rallado LALA 250 grs', precio: 79.9, unidad: '1pz', imagen: 'qso_rall.png', departamento: 'Quesos' },
{id: 55, nombre: 'Queso Panela Canastita LA VILLITA ', descripcion: 'Queso Panela Canastita LA VILLITA 200 grs', precio: 79.9, unidad: '1pz', imagen: 'qso_pan.png', departamento: 'Quesos' },
{id: 56, nombre: 'Carne molida', descripcion: 'Carne molida de Sirlon Premium', precio: 266.9, unidad: 'kg', imagen: 'carne_mol.png', departamento: 'Carnes' },
{id: 56, nombre: 'Queso PHILADELFIA', descripcion: 'Queso crema PHILADELFIA', precio: 34.9, unidad: 'pz', imagen: 'ques_fil.png', departamento: 'Quesos' },
{id: 57, nombre: 'Queso Panela LALA', descripcion: 'Queso Panela LALA 400 grs', precio: 71.9, unidad: 'kg', imagen: 'ques_panlala.png', departamento: 'Quesos' },
{id: 57, nombre: 'Vampiros de pulpa negra', descripcion: 'Vampiros de pulpa negra', precio: 239.9, unidad: '1pz', imagen: 'vampir_pn.png', departamento: 'Carnes' },
{id: 58, nombre: 'Yakoult 80 ml ', descripcion: 'Yakoult 80 ml light', precio: 49.9, unidad: '1pz', imagen: 'yakul_lig.png', departamento: 'Yoghourt' },
{id: 59, nombre: 'Yakoult Lactofermentada', descripcion: 'Yakoult Lactofermentada 5 pzas', precio: 37.9, unidad: '1pz', imagen: 'yakul.png', departamento: 'Yoghourt' },
{id: 60, nombre: 'Yogourt LALA Manzana', descripcion: 'Yogourt LALA Manzana', precio: 40.9, unidad: 'pz', imagen: 'you_mza.png', departamento: 'Yoghourt' },
{id: 61, nombre: 'Carne para Deshebrar ', descripcion: 'Carne para Deshebrar x kg', precio: 189.9, unidad: 'kg', imagen: 'carne_des.png', departamento: 'Carnes' },
{id: 62, nombre: 'Milanesa de pulpa negra', descripcion: 'Milanesa de pulpa negra x kg', precio: 229.9, unidad: 'kg', imagen: 'milanesa_pn.png', departamento: 'Carnes' },
{id: 63, nombre: 'Chuleta Ahumada de Puerco ', descripcion: 'Chuleta Ahumada de Puerco x kg', precio: 116.9, unidad: 'kg', imagen: 'chuleta_cerdh.png', departamento: 'Carnes' },
{id: 64, nombre: 'Plato pastelero', descripcion: 'Plato pastelero Mimarca # 6 20pzas', precio: 22.9, unidad: 'pz', imagen: 'pla_ter.png', departamento: 'Desechables' },
{id: 65, nombre: 'Desechable vaso transparente # 8', descripcion: 'Desechable vaso transparente  MiMARCA# 8', precio: 15.9, unidad: 'pz', imagen: 'dese_vt8.png', departamento: 'Desechables' },
{id: 66, nombre: 'Desechable vaso termico # 8', descripcion: 'Desechable vaso termico Mimarca # 8', precio: 15.9, unidad: 'pz', imagen: 'dese_vter8.png', departamento: 'Desechables' },
{id: 67, nombre: 'Cuchara de plastico Mimarca', descripcion: 'Cuchara de plastico Mimarca 25 pzas', precio: 17.9, unidad: 'pz', imagen: 'dese_cur.png', departamento: 'Desechables' },
{id: 68, nombre: 'Tenedor de plastico Mimarca', descripcion: 'Tenedor de plastico Mimarca 25 pzas', precio: 17.9, unidad: 'pz', imagen: 'dese_ten.png', departamento: 'Desechables' },
{id: 69, nombre: 'Desechable Plato Rectangular Termico Mimarca', descripcion: 'Desechable Plato Rectangular Termico Mimarca 20 pzas', precio: 24.9, unidad: 'pz', imagen: 'dese_plrec.png', departamento: 'Desechables' },
{id: 70, nombre: 'Desechable Plato Redondo Termico', descripcion: 'Desechable Plato Redondo Termico Mimarca 20 pzas', precio: 27.9, unidad: 'pz', imagen: 'dese_plred.png', departamento: 'Desechables' },
{id: 71, nombre: 'Aceite Canola CAPULLO', descripcion: 'Aceite Canola CAPULLO', precio: 34.9, unidad: '1pz', imagen: 'aceite_cap.png', departamento: 'Despensa' },
{id: 72, nombre: 'Arroz CAZEROLA', descripcion: 'Arroz CAZEROLA 907 grs', precio: 22.9, unidad: 'pz', imagen: 'arroz_caze.png', departamento: 'Despensa' },
{id: 73, nombre: 'Azucar Estandar Mimarca', descripcion: 'Azucar Estandar Mimarca 907 grs', precio: 34.9, unidad: '1pz', imagen: 'azucar_mm.png', departamento: 'Despensa' },
{id: 74, nombre: 'Caldo Costilla Jugosa KNORR ', descripcion: 'Consomes Caldo Costilla Jugosa KNORR 8 pzas', precio: 27.9, unidad: '1pz', imagen: 'cost_knorr.png', departamento: 'Despensa' },
{id: 75, nombre: 'Caldo de Pollo KNORR', descripcion: 'Consomes Caldo de Pollo KNORR 12 pzas', precio: 317.9, unidad: '1pz', imagen: 'caldop_knorr.png', departamento: 'Despensa' },
{id: 76, nombre: 'Cereal Corn Flakes KELLOGGS ', descripcion: 'Cereal Corn Flakes KELLOGGS 410 grs', precio: 44.9, unidad: '1pz', imagen: 'cereal_kg.png', departamento: 'Despensa' },
{id: 77, nombre: 'Galleta Marias GAMESA', descripcion: 'Galleta Marias GAMESA 510 grs', precio: 41.9, unidad: '1pz', imagen: 'gallet_mar.png', departamento: 'Despensa' },
{id: 78, nombre: 'Mi Arroz Blanco KNORR ', descripcion: 'Sasonador Mi Arroz Blanco KNORR 48 grs', precio: 317.9, unidad: '1pz', imagen: 'miarroz_knorr.png', departamento: 'Despensa' },
{id: 79, nombre: 'Servilletas Practica PETALO', descripcion: 'Servilletas Practica PETALO', precio: 15.9, unidad: '1pz', imagen: 'servil_peta.png', departamento: 'Despensa' },
{id: 80, nombre: 'TANG Limonada', descripcion: 'Bebida en polvo Limonada TANG 13grs', precio: 5.5, unidad: '1pz', imagen: 'tang_lim.png', departamento: 'Despensa' },
{id: 81, nombre: 'TANG Naranja', descripcion: 'Bebida en polvo Naranja TANG 13grs', precio: 5.5, unidad: '1pz', imagen: 'tang_nar.png', departamento: 'Despensa' },
{id: 82, nombre: 'TANG Tamarindo', descripcion: 'ebida en polvo Tamarindo TANG 13 grs', precio: 5.5, unidad: 'pz', imagen: 'tang_tam.png', departamento: 'Despensa' },
{id: 83, nombre: 'TANG Tamarindo', descripcion: 'Bebida en polvo Manzana TANG 13grs', precio: 5.5, unidad: '1pz', imagen: 'tang_mza.png', departamento: 'Despensa' },
{id: 84, nombre: 'Lata de chile jalapeño', descripcion: 'Lata de chile jalapeño Nachos LA COSTEÑA 220 grs', precio: 19.9, unidad: 'pz', imagen: 'lata_chij.png', departamento: 'Despensa' },
{id: 85, nombre: 'Lata de chile jalapeño rajas', descripcion: 'Lata de chile jalapeño rajas  LA COSTEÑA 240 grs', precio: 19.9, unidad: 'pz', imagen: 'lata_chijra.png', departamento: 'Despensa' },
{id: 86, nombre: 'Lata piña en almibar LA COSTEÑA', descripcion: 'Lata piña en almibar trocitos LA COSTEÑA 800 grs', precio: 59.9, unidad: 'pz', imagen: 'lata_piña.png', departamento: 'Despensa' },
{id: 87, nombre: 'Galletas saladas GAMESA', descripcion: 'Galletas saladas GAMESA 495 grs', precio: 40.9, unidad: 'pz', imagen: 'gamesa_salad.png', departamento: 'Despensa' },
{id: 88, nombre: 'Galletas Doradas GAMESA', descripcion: 'Galletas Doradas GAMESA 171 grs', precio: 17.9, unidad: 'pz', imagen: 'gallet_dor.png', departamento: 'Despensa' },
{id: 89, nombre: 'Galletas Marias GAMESA', descripcion: 'Galletas Marias GAMESA 170 grs', precio: 14.9, unidad: 'pz', imagen: 'gallet_maria.png', departamento: 'Despensa' },
{id: 90, nombre: 'Miel CARLOTA', descripcion: 'Miel de Abeja CARLOTA 300 grs', precio: 59.9, unidad: 'pz', imagen: 'miel_carl.png', departamento: 'Despensa' },
{id: 91, nombre: 'Barra de grano ', descripcion: 'Barra de grano  BRAN Frut BIMBO', precio: 49.9, unidad: 'pz', imagen: 'barra_frut.png', departamento: 'Despensa' },
{id: 92, nombre: 'Aceituna s/hueso BUFALO', descripcion: 'Aceituna s/hueso BUFALO', precio: 23.5, unidad: 'pz', imagen: 'aceituna_shbuf.png', departamento: 'Despensa' },
{id: 93, nombre: 'Alcaparras BUFALO', descripcion: 'Alcaparras CAMPOAMOR 110 grs', precio: 29.9, unidad: 'pz', imagen: 'alcaparras.png', departamento: 'Despensa' },
{id: 94, nombre: 'Salta de tomate Catsup CLEMENTE JAQUES', descripcion: 'Salta de tomate Catsup CLEMENTE JAQUES 680 ml', precio: 29.9, unidad: 'pz', imagen: 'salsa_tomqj.png', departamento: 'Despensa' },
{id: 95, nombre: 'Aderezo para ensaladas Cesar CLEMENTE JAQUES', descripcion: 'Aderezo para ensaladas CLEMENTE JAQUES 237 grs', precio: 31.9, unidad: 'pz', imagen: 'aderezo_cesqj.png', departamento: 'Despensa' },
{id: 96, nombre: 'Cafe DECAF Descafeinado', descripcion: 'Café Soluble DECAF Descafeinado 120 grs', precio: 97.9, unidad: 'pz', imagen: 'cafe_decaf.png', departamento: 'Despensa' },
{id: 97, nombre: 'Palillos PINGÜINO', descripcion: 'Palillos redondos 2 puntas PINGÜINO 150 pzas', precio: 24.9, unidad: 'pz', imagen: 'palillos.png', departamento: 'Despensa' },
{id: 98, nombre: 'Pasas VERDE VALLE', descripcion: 'Pasas VERDE VALLE 100 grs', precio: 19.9, unidad: 'pz', imagen: 'pasas_vv.png', departamento: 'Despensa' },
{id: 99, nombre: 'Sopa Camaron MARUCHAN ', descripcion: 'Sopa Instantanea Camaron MARUCHAN 64 grs', precio: 15.5, unidad: 'pz', imagen: 'sopa_maru.png', departamento: 'Despensa' },
{id: 100, nombre: 'Sopa Instantanea SHIN BOWL NONG ', descripcion: 'Sopa Instantanea SHIN BOWL NONG 86 grs', precio: 19.9, unidad: 'pz', imagen: 'sopa_shin.png', departamento: 'Despensa' },
{id: 101, nombre: 'Salsa Catsup Pouch HEINZ ', descripcion: 'Salsa Catsup Pouch HEINZ 397 grs', precio: 22.9, unidad: 'pz', imagen: 'salsa_tomhe.png', departamento: 'Despensa' },
{id: 102, nombre: 'Salsa Picante Habanera Roja MEXICO LINDO', descripcion: 'Salsa Picante Habanera Roja MEXICO LINDO 150 grs', precio: 22.9, unidad: 'pz', imagen: 'salsa_pi.png', departamento: 'Despensa' },
{id: 103, nombre: 'Salsa Picante Mexicana Verde LA COSTEÑA', descripcion: 'Salsa Picante Mexicana Verde LA COSTEÑA 250 grs', precio: 27.9, unidad: 'pz', imagen: 'salsa_picos.png', departamento: 'Despensa' },
{id: 104, nombre: 'Salsa Catsup HEINZ 397', descripcion: 'Salsa Catsup HEINZ 397 grs', precio: 19.9, unidad: 'pz', imagen: 'salsa_tomhe2.png', departamento: 'Despensa' },
{id: 105, nombre: 'Mole GALA ', descripcion: 'Mole GALA 265 grs', precio: 72.9, unidad: 'pz', imagen: 'mole_gala.png', departamento: 'Despensa' },
{id: 106, nombre: 'Mole Doña Maria rojo', descripcion: 'Mole Doña Maria rojo 360 grs', precio: 20.9, unidad: 'pz', imagen: 'mole_dm.png', departamento: 'Despensa' },
{id: 107, nombre: 'Cereal Extra Arandanos KELLOGGS ', descripcion: 'Cereal Extra Arandanos KELLOGGS 420 grs', precio: 69.9, unidad: 'pz', imagen: 'cereal_kgaran.png', departamento: 'Despensa' },
{id: 108, nombre: 'Cereal Extra Nuez KELLOGGS ', descripcion: 'Cereal Extra Nuez KELLOGGS 420 grs', precio: 69.9, unidad: 'pz', imagen: 'cereal_kgmie.png', departamento: 'Despensa' },
{id: 109, nombre: 'Barra Nutri Grain Fresa KELLOGS ', descripcion: 'Barra de grano Nutri Grain Fresa KELLOGS 6 pzas 222 grs', precio: 49.9, unidad: 'pz', imagen: 'barra_kgfres.png', departamento: 'Despensa' },
{id: 110, nombre: 'Barra de grano Cereal Bar KELLOGS', descripcion: 'Barra de grano Cereal Bar KELLOGS 126 grs', precio: 38.9, unidad: 'pz', imagen: 'barra_kgcer.png', departamento: 'Despensa' },
{id: 111, nombre: 'Salsa BBQ original HUNTS ', descripcion: 'Salsa BBQ original HUNTS 620 grs', precio: 39.9, unidad: 'pz', imagen: 'salsa_bbq.png', departamento: 'Despensa' },
{id: 112, nombre: 'Salsa Inglesa MAGGI ', descripcion: 'Salsa Inglesa MAGGI 100 ml', precio: 26.9, unidad: 'pz', imagen: 'salsa_ing.png', departamento: 'Despensa' },
{id: 113, nombre: 'Sazonador Sal con Cebolla PRAGNA ', descripcion: 'Sazonador Sal con Cebolla PRAGNA 140 grs', precio: 29.9, unidad: 'pz', imagen: 'sazo_syc.png', departamento: 'Despensa' },
{id: 114, nombre: 'Jugo sazonador original MAGGI ', descripcion: 'Jugo sazonador original MAGGI 100 ml', precio: 37.9, unidad: 'pz', imagen: 'sazo_magg.png', departamento: 'Despensa' },
{id: 115, nombre: 'Sopa Fideo Instantanea KNORR ', descripcion: 'Sopa Fideo Instantanea KNORR 143 grs', precio: 22.9, unidad: 'pz', imagen: 'sopa_fide.png', departamento: 'Despensa' },
{id: 116, nombre: 'Pasta de Fideo # 0 BARILLA ', descripcion: 'Pasta de Fideo # 0 BARILLA 200 grs', precio: 10.9, unidad: 'pz', imagen: 'sopa_fide0.png', departamento: 'Despensa' },
{id: 117, nombre: 'Pasta de Fideo mediano YEMINA ', descripcion: 'Pasta de Fideo mediano YEMINA 500 grs', precio: 21.9, unidad: 'pz', imagen: 'sopa_fideyem.png', departamento: 'Despensa' },
{id: 118, nombre: 'Pasta de Fideo # 1 LA MODERNA', descripcion: 'Pasta de Fideo # 1 LA MODERNA 200 grs', precio: 8.5, unidad: 'pz', imagen: 'sopa_fide1.png', departamento: 'Despensa' },
{id: 119, nombre: 'Pasta Spaghetti YEMINA # 7 ', descripcion: 'Pasta Spaghetti YEMINA # 7 500 grs', precio: 21.9, unidad: 'pz', imagen: 'sopa_spag.png', departamento: 'Despensa' },
{id: 120, nombre: 'Pasta para Codo Fior Di Pasta ', descripcion: 'Pasta para Codo Fior Di Pasta 200 grs', precio: 6.9, unidad: 'pz', imagen: 'sopa_codo.png', departamento: 'Despensa' },
{id: 121, nombre: 'Pasta para sopa Semilla de Melon Fior Di Pasta', descripcion: 'Pasta para spa Semilla de Melon Fior Di Pasta 200 grs', precio: 6.9, unidad: 'pz', imagen: 'sopa_semm.png', departamento: 'Despensa' },
{id: 122, nombre: 'Pasta de Fideo # 1 LA MODERNA nva', descripcion: 'Pasta de Fideo # 1 LA MODERNA 200 grs', precio: 8.5, unidad: 'pz', imagen: 'sopa_fide1mo.png', departamento: 'Despensa' },
{id: 123, nombre: 'Pasta Sopa Macarron KRAFT ', descripcion: 'Pasta Sopa Macarron KRAFT 206 grs', precio: 36.9, unidad: 'pz', imagen: 'sopa_maca.png', departamento: 'Despensa' },
{id: 124, nombre: 'Pasta Sopa Codo LA MODERNA', descripcion: 'Pasta Sopa Codo LA MODERNA 200 grs', precio: 8.5, unidad: 'pz', imagen: 'sopa_codomo.png', departamento: 'Despensa' },
{id: 125, nombre: 'Salsa TAMPICO picante Bufalo ', descripcion: 'Salsa TAMPICO picante Bufalo 60 grs', precio: 36.9, unidad: 'pz', imagen: 'salsa_tam.png', departamento: 'Despensa' },
{id: 126, nombre: 'Sal Yodada s/fluor LA FINA', descripcion: 'Sal Yodada s/fluor LA FINA', precio: 29.9, unidad: 'kg', imagen: 'sal_laf.png', departamento: 'Despensa' },
{id: 127, nombre: 'Aderezo Italiana CLEMENTE JAQUES', descripcion: 'Aderezo para ensaladas  Italiana CLEMENTE JAQUES 237 grs', precio: 31.9, unidad: 'pz', imagen: 'aderezo_itacj.png', departamento: 'Despensa' },
{id: 128, nombre: 'Aderezo Mil Islas CLEMENTE JAQUES', descripcion: 'Aderezo para ensaladas  Mil Islas CLEMENTE JAQUES 237 grs', precio: 31.9, unidad: 'pz', imagen: 'aderezo_micj.png', departamento: 'Despensa' },
{id: 129, nombre: 'Aderezo Ranch CLEMENTE JAQUES', descripcion: 'Aderezo para ensaladas  Ranch CLEMENTE JAQUES 237 grs', precio: 31.9, unidad: 'pz', imagen: 'aderezo_rancj.png', departamento: 'Despensa' },
{id: 130, nombre: 'Chorizo Las Sevillanas', descripcion: 'Chorizo Las Sevillanas', precio: 12.9, unidad: 'pz', imagen: 'chor_sev.png', departamento: 'Embutidos' },
{id: 131, nombre: 'Salchicha Golden de Pavo SAN RAFAEL', descripcion: 'Salchicha Golden de Pavo SAN RAFAEL 500 grs', precio: 49.9, unidad: 'pz', imagen: 'salchicha_pavsr.png', departamento: 'Embutidos' },
{id: 132, nombre: 'Jamon Virginia de Pavo LALA', descripcion: 'Jamon Virginia de Pavo Plenia LALA 250 grs', precio: 34.9, unidad: 'pz', imagen: 'jamon_virlala.png', departamento: 'Embutidos' },
{id: 133, nombre: 'Jamon Virginia de Pavo FUD', descripcion: 'Jamon Virginia de Pavo FUD 450 grs', precio: 65.9, unidad: 'pz', imagen: 'jamon_virfud.png', departamento: 'Embutidos' },
{id: 134, nombre: 'Jamon Virginia de Pavo KIR ', descripcion: 'Jamon Virginia de Pavo KIR 450 grs', precio: 57.9, unidad: 'pz', imagen: 'jamon_virkir.png', departamento: 'Embutidos' },
{id: 135, nombre: 'Tocino Ahumado SABORI ', descripcion: 'Tocino Ahumado SABORI 200 grs', precio: 69.9, unidad: 'pz', imagen: 'tocino_sabo.png', departamento: 'Embutidos' },
{id: 136, nombre: 'Tocino Ahumado BAFAR ', descripcion: 'Tocino Ahumado BAFAR 200 grs', precio: 69.9, unidad: 'pz', imagen: 'tocino_bafa.png', departamento: 'Embutidos' },
{id: 137, nombre: 'Tocino Ahumado KIR ', descripcion: 'Tocino Ahumado KIR 250 grs', precio: 79.9, unidad: 'pz', imagen: 'tocino_kir.png', departamento: 'Embutidos' },
{id: 138, nombre: 'Tocino Ahumado FUD ', descripcion: 'Tocino Ahumado FUD 250 grs', precio: 76.9, unidad: 'pz', imagen: 'tocino_fud.png', departamento: 'Embutidos' },
{id: 139, nombre: 'Bolsa p/basura COSTALITOS', descripcion: 'Bolsa p/basura G 62x80 COSTALITOS', precio: 34.9, unidad: 'pz', imagen: 'costal.png', departamento: 'Limpieza' },
{id: 140, nombre: 'Detergente en polvo ACE ', descripcion: 'Detergente en polvo ACE 540 grs', precio: 25.9, unidad: '1pz', imagen: 'deter_ace.png', departamento: 'Limpieza' },
{id: 141, nombre: 'FABULOSO Lavanda', descripcion: 'Limpiador Liq Lavanda FABULOSO 1lt', precio: 27.9, unidad: '1pz', imagen: 'fabuloso_lavn.png', departamento: 'Limpieza' },
{id: 142, nombre: 'FABULOSO Lavanda 2Lt', descripcion: 'Limpiador Liq Lavanda FABULOSO 2lt', precio: 36.9, unidad: '1pz', imagen: 'fabuloso_lavn2.png', departamento: 'Limpieza' },
{id: 143, nombre: 'FABULOSO Mar Fresco', descripcion: 'Limpiador Liq Mar Fresco FABULOSO 1lt', precio: 43.9, unidad: '1pz', imagen: 'fabuloso_fres.png', departamento: 'Limpieza' },
{id: 144, nombre: 'FABULOSO Naranja', descripcion: 'Limpiador Liq Naranja FABULOSO 1lt', precio: 27.9, unidad: '1pz', imagen: 'fabuloso_nar.png', departamento: 'Limpieza' },
{id: 145, nombre: 'Jabon barra blanco ZOTE ', descripcion: 'Jabon barra blanco ZOTE 200 grs', precio: 9.9, unidad: '1pz', imagen: 'zote_bco.png', departamento: 'Limpieza' },
{id: 146, nombre: 'Suavizante Frescura Perdurable', descripcion: 'Suavizante de tela Frescura Perdurable CARISMA', precio: 29.9, unidad: 'lt', imagen: 'sua_cari.png', departamento: 'Limpieza' },
{id: 147, nombre: 'Lavatrastes Liq SALVO', descripcion: 'Lavatrastes Liq Limon SALVO 900 ml', precio: 55.9, unidad: 'pz', imagen: 'lavat_salvo.png', departamento: 'Limpieza' },
{id: 148, nombre: 'Detergente en polvo ACE Naturals', descripcion: 'Detergente en polvo ACE Naturals 800 grs', precio: 28.9, unidad: 'pz', imagen: 'deter_acenat.png', departamento: 'Limpieza' },
{id: 149, nombre: 'Limpiadro PINOL', descripcion: 'Limpiadro PINOL 1.65 lt', precio: 34.9, unidad: 'pz', imagen: 'limp_pino.png', departamento: 'Limpieza' },
{id: 150, nombre: 'Limpiador Cloro CLORALEX', descripcion: 'Limpiador Cloro CLORALEX regular 950 ml', precio: 17.9, unidad: 'pz', imagen: 'blanq_clora.png', departamento: 'Limpieza' },
{id: 151, nombre: 'Aromatizante Lavanda', descripcion: 'Aromatizante Aerosol Lavanda NICE KLEEN 226 grs', precio: 31.9, unidad: 'pz', imagen: 'aroma_lav.png', departamento: 'Limpieza' },
{id: 152, nombre: 'Desinfectante LYSOL', descripcion: 'Desinfectante LYSOL 354 grs', precio: 135.9, unidad: 'pz', imagen: 'desin_lysol.png', departamento: 'Limpieza' },
{id: 153, nombre: 'Limpiador discos Lima Fresca Pato Purific', descripcion: 'Limpiador discos Lima Fresca Pato Purific 36 ml', precio: 45.9, unidad: 'pz', imagen: 'discos_purif.png', departamento: 'Limpieza' },
{id: 154, nombre: 'Shampoo Borrador FRUCTIS', descripcion: 'Shampoo Borrador FRUCTIS 350 ml', precio: 69.9, unidad: 'pz', imagen: 'shampoo_fructis.png', departamento: 'Limpieza' },
{id: 155, nombre: 'Jabon de tocador ESCUDO', descripcion: 'Jabon de tocador ESCUDO 5 pack 110 grs', precio: 62.9, unidad: 'pz', imagen: 'jabon_escu.png', departamento: 'Limpieza' },
{id: 156, nombre: 'Pasta dental COLGATE', descripcion: 'Pasta dental Total Antosarro COLGATE Total 12 75 ml', precio: 32.9, unidad: 'pz', imagen: 'pasta_colg.png', departamento: 'Limpieza' },
{id: 157, nombre: 'Pasta dental CREST', descripcion: 'Pasta dental Anticaries Menta CREST 140 ml', precio: 29.9, unidad: 'pz', imagen: 'pasta_crest.png', departamento: 'Limpieza' },
{id: 158, nombre: 'Gel para cabello EGO', descripcion: 'Gel para cabello EGO 450 ml', precio: 39.9, unidad: 'pz', imagen: 'gel_ego.png', departamento: 'Limpieza' },
{id: 159, nombre: 'Panuelos KLENEEX', descripcion: 'Panuelos KLENEEX Aromas', precio: 24.9, unidad: 'pz', imagen: 'panelos_klar.png', departamento: 'Limpieza' },
{id: 160, nombre: 'Papel Higienico PETALO 12 pzas', descripcion: 'Papel Higienico PETALO 12 pzas', precio: 89.9, unidad: 'pz', imagen: 'papel_hipet.png', departamento: 'Limpieza' },
{id: 161, nombre: 'Limpiador discos Lavanda Pato Purific', descripcion: 'Limpiador discos Lavanda Pato Purific 36 ml', precio: 45.9, unidad: 'pz', imagen: 'discos_puriflav.png', departamento: 'Limpieza' },
{id: 162, nombre: 'Shampoo Herbal CAPRICE', descripcion: 'Shampoo Herbal CAPRICE 760 ml', precio: 39.9, unidad: 'pz', imagen: 'shampoo_caprice.png', departamento: 'Limpieza' },
{id: 163, nombre: 'Suavizante de tela Complete Adios SUAVITEL', descripcion: 'Suavizante de tela Complete Adios SUAVITEL 1.3 lt', precio: 39.9, unidad: 'pz', imagen: 'sua_suav.png', departamento: 'Limpieza' },
{id: 164, nombre: 'Pan dulce Barry Pina', descripcion: 'Pan dulce Barry Pina 1pza', precio: 12.9, unidad: 'pz', imagen: 'pand_pin.png', departamento: 'Pan' },
{id: 165, nombre: 'Pan dulce Empanada Pina', descripcion: 'Pan dulce Empanada Pina 1pza', precio: 12.9, unidad: 'pz', imagen: 'pand_empp.png', departamento: 'Pan' },
{id: 166, nombre: 'Pan para hot dog BUTTER KRUST', descripcion: 'Pan para hot dog BUTTER KUST 340 grs', precio: 44.9, unidad: 'pz', imagen: 'pan_hot.png', departamento: 'Pan' },
{id: 167, nombre: 'Pan para Hamburguesa BIMBO', descripcion: 'Pan para Hamburguesa BIMBOLLOS', precio: 56.9, unidad: 'pz', imagen: 'pan_bimbollos.png', departamento: 'Pan' },
{id: 168, nombre: 'Pan para hot dog  Natures OWN ', descripcion: 'Pan para hot dog Mantequilla Natures OWN 454 grs', precio: 66.9, unidad: 'pz', imagen: 'pan_hotown.png', departamento: 'Pan' },
{id: 169, nombre: 'Pan para hot dog BIMBO', descripcion: 'Pan para hot dog Medias Noches BIMBO', precio: 39.9, unidad: 'pz', imagen: 'pan_hotbimbo.png', departamento: 'Pan' },
{id: 170, nombre: 'Pan dona Chocolate', descripcion: 'Dona mini chocolate 1 pza', precio: 5.9, unidad: 'pz', imagen: 'pan_donach.png', departamento: 'Pan' },
{id: 171, nombre: 'Pan dona Maple', descripcion: 'Dona mini maple 1 pza', precio: 5.9, unidad: 'pz', imagen: 'pan_donachm.png', departamento: 'Pan' },
{id: 172, nombre: 'Pan dona creama avellana', descripcion: 'Dona Crema Avellana 1 pza', precio: 17.9, unidad: 'pz', imagen: 'pan_donachg.png', departamento: 'Pan' },
{id: 173, nombre: 'Filete de Mojarra ', descripcion: 'Filete de Mojarra x kg', precio: 169.9, unidad: '1pz', imagen: 'filet_moj.png', departamento: 'Pescados' },
{id: 174, nombre: 'Jarro de Jocoque LA VAQUITA', descripcion: 'Jarro de Jocoque LA VAQUITA 650 ml', precio: 59.9, unidad: 'kg', imagen: 'jocoque.png', departamento: 'Quesos' },
{id: 175, nombre: 'Aspirina Efervezente BAYER', descripcion: 'Aspirina Efervescemte BAYER 12 tabs', precio: 43.9, unidad: 'pz', imagen: 'aspirina_efe.png', departamento: 'Salud' },
{id: 176, nombre: 'Suero ELECTROLITO Fresa', descripcion: 'Suero ELECTROLITO oral Fresa 625 ml', precio: 22.9, unidad: 'pz', imagen: 'suero_elefre.png', departamento: 'Salud' },
{id: 177, nombre: 'Suero SUEROX Naranja', descripcion: 'Suero SUEROX oral Naranja-Mandarina 630 ml', precio: 20, unidad: 'pz', imagen: 'suero_suernar.png', departamento: 'Salud' },
{id: 178, nombre: 'Suero SUEROX Fresa', descripcion: 'Suero SUEROX oral Fresa-Kiwi 630 ml', precio: 20, unidad: 'pz', imagen: 'suero_suerfre.png', departamento: 'Salud' },
{id: 179, nombre: 'Suero SUEROX Mora', descripcion: 'Suero SUEROX oral Mora Azul 630 ml', precio: 20, unidad: 'pz', imagen: 'suero_suermor.png', departamento: 'Salud' },
{id: 180, nombre: 'Sabritas Papas', descripcion: 'Sabritas Papas', precio: 52.9, unidad: 'pz', imagen: 'sabritas_pap.png', departamento: 'Snacks' },
{id: 181, nombre: 'Papas congeladas a la francesa', descripcion: 'Papas congeladas a la francesa MYBRAND 500 grs', precio: 41.9, unidad: 'pz', imagen: 'papas_fra.png', departamento: 'Snacks' },
{id: 182, nombre: 'Helando Napolitano HOLANDA', descripcion: 'Helando Napolitano HOLANDA 900 ml', precio: 49.9, unidad: 'pz', imagen: 'helado_naphol.png', departamento: 'Snacks' },
{id: 183, nombre: 'Botana MIX BOKADOS 210 grs', descripcion: 'Botana MIX BOKADOS 210 grs', precio: 26.9, unidad: 'pz', imagen: 'bota_bok.png', departamento: 'Snacks' },
{id: 184, nombre: 'Palomitas Mantequilla ACTII ', descripcion: 'Palomitas Mantequilla ACTII 8 pzas', precio: 69.9, unidad: 'pz', imagen: 'palom_act28.png', departamento: 'Snacks' },
{id: 185, nombre: 'Palomitas Mantequilla ACTII 3 ', descripcion: 'Palomitas Mantequilla ACTII 3 pzas', precio: 34.9, unidad: 'pz', imagen: 'palom_act23.png', departamento: 'Snacks' },
{id: 186, nombre: 'Chicharron de Cerdo BOKADOS ', descripcion: 'Chicharron de Cerdo BOKADOS 175 grs', precio: 69.9, unidad: 'pz', imagen: 'chich_cdo.png', departamento: 'Snacks' },
{id: 187, nombre: 'Fritos sal y limon BOKADOS', descripcion: 'Fritos sal y limon BOKADOS 225 grs', precio: 26.9, unidad: 'pz', imagen: 'fritos_bok.png', departamento: 'Snacks' },
{id: 188, nombre: 'Botana Doritos Flamin Hot SABRITAS', descripcion: 'Botana Doritos Flamin Hot SABRITAS 223 grs', precio: 59.9, unidad: 'pz', imagen: 'doritos_fla.png', departamento: 'Snacks' },
{id: 189, nombre: 'Botana Doritos Nacho SABRITAS', descripcion: 'Botana Doritos Nacho SABRITAS 146 grs', precio: 36.9, unidad: 'pz', imagen: 'doritos_nor.png', departamento: 'Snacks' },
{id: 190, nombre: 'Botana Ruffles Queso SABRITAS', descripcion: 'Botana Ruffles Queso SABRITAS 120 grs', precio: 36.9, unidad: 'pz', imagen: 'ruffles_120.png', departamento: 'Snacks' },
{id: 191, nombre: 'Botana Papas Flamin Hot SABRITAS ', descripcion: 'Botana Papas Flamin Hot SABRITAS 160 grs', precio: 52.9, unidad: 'pz', imagen: 'bota_flam.png', departamento: 'Snacks' },
{id: 192, nombre: 'Botana Takis Fuego BARCEL ', descripcion: 'Botana Takis Fuego BARCEL 240 grs', precio: 54.9, unidad: 'pz', imagen: 'takis_fir.png', departamento: 'Snacks' },
{id: 193, nombre: 'Botana Takis BARCEL', descripcion: 'Botana Takis BARCEL 240 grs', precio: 54.9, unidad: 'pz', imagen: 'takis_nor.png', departamento: 'Snacks' },
{id: 194, nombre: 'Ensueño Fresca Prim', descripcion: 'Suavizante Ensueño Fresca Primavera', precio: 14.9, unidad: 'pz', imagen: 'sua_ensue.png', departamento: 'Suavizantes' },

];

export default productos;
