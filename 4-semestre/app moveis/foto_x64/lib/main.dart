import 'package:flutter/material.dart';
import 'package:camera/camera.dart';
import 'fotob64.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final cameras = await availableCameras();
  final fisrtCamera = cameras.first;

  runApp(
    MaterialApp(
      title: 'Foto 2',
      home: FotoB64(camera: fisrtCamera),
      debugShowCheckedModeBanner: false,
    ),
  );
}
