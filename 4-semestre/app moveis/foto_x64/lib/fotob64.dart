import 'package:flutter/material.dart';


import 'dart:async';
import 'dart:io';
import 'package:camera/camera.dart';

class FotoB64 extends StatefulWidget {
  final CameraDescription camera;

  const FotoB64({
    super.key,
    required this.camera,
  });

  @override
  State<FotoB64> createState() => _FotoB64State();
}

class _FotoB64State extends State<FotoB64> {
  late CameraController cameraController;
  late Future<void> initializeControllerFuture;

  @override
  void initState() {
    super.initState();

    cameraController = CameraController(widget.camera, ResolutionPreset.low);
    initializeControllerFuture = cameraController.initialize();
  }

  @override
  void dispose() {
    super.dispose();

    cameraController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Tirar foto'),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.all(10),
        child: FutureBuilder<void>(
          future: initializeControllerFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              return CameraPreview(cameraController);
            } else {
              return const Center(
                child: CircularProgressIndicator(),
              );
            }
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          try {
            await initializeControllerFuture;
            final image = await cameraController.takePicture();
            if (!mounted) return;

            await Navigator.of(context).push(
              MaterialPageRoute(
                builder: (context) => DisplayImage(
                  imagePath: image.path,
                ),
              ),
            );
          } catch (e) {
            throw ('error $e');
          }
        },
      ),
    );
  }
}

class DisplayImage extends StatefulWidget {
  final String imagePath;
  const DisplayImage({
    super.key,
    required this.imagePath,
  });

  @override
  State<DisplayImage> createState() => _DisplayImageState();
}

class _DisplayImageState extends State<DisplayImage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Foto tirada"),
      ),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(10),
          child: Image.file(
            File(widget.imagePath),
          ),
        ),
      ),
    );
  }
}
