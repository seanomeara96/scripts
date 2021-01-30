import numpy as np
import cv2

img = cv2.imread('biolage.png')  # Read in the image and convert to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
gray = 255*(gray < 255).astype(np.uint8)  # To invert the text to white
cv2.imshow("inverted", gray)
gray = cv2.morphologyEx(gray, cv2.MORPH_OPEN, np.ones(
    (2, 2), dtype=np.uint8))  # Perform noise filtering
coords = cv2.findNonZero(gray)  # Find all non-zero points (text)
x, y, w, h = cv2.boundingRect(coords)  # Find minimum spanning bounding box
# Crop the image - note we do this on the original image
rect = img[y:y+h, x:x+w]
cv2.imshow("Cropped", rect)  # Show it
cv2.waitKey(0)
cv2.destroyAllWindows()
cv2.imwrite("rect.png", rect)  # Save the image
